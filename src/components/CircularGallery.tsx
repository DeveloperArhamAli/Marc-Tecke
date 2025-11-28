// CircularGallery.tsx
import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import React, { useEffect, useRef } from 'react';
import { CarlBusbyJr, ChrisHernandez } from '@/assets/images';

type GL = Renderer['gl'];

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: number;
  return function (this: any, ...args: Parameters<T>) {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

interface CircularGalleryProps {
  items?: { image: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number; // in normalized uv units (0..0.5)
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
  itemWidth?: number; // world units (optional)
  itemHeight?: number; // world units (optional)
  segments?: { widthSegments: number; heightSegments: number };
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  font = 'bold 30px Figtree',
  scrollSpeed = 2,
  scrollEase = 0.08,
  itemWidth = 3.0,
  itemHeight = 2.0,
  segments = { widthSegments: 350, heightSegments: 250 }
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    appRef.current = new App(containerRef.current, {
      items,
      bend,
      textColor,
      borderRadius,
      font,
      scrollSpeed,
      scrollEase,
      itemWidth,
      itemHeight,
      segments
    });
    return () => {
      appRef.current?.destroy();
      appRef.current = null;
    };
    // We intentionally don't depend on 'items' deep equality here; re-create on prop change
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, itemWidth, itemHeight, segments]);

  return <div ref={containerRef} className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing" />;
}

/* ---------- App & Media classes (optimized) ---------- */

interface AppConfig {
  items?: { image: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
  itemWidth?: number;
  itemHeight?: number;
  segments?: { widthSegments: number; heightSegments: number };
}

interface ScreenSize {
  width: number;
  height: number;
}

interface Viewport {
  width: number;
  height: number;
}

/* Helper: create a stable texture from an Image or Canvas and set filters */
function makeTexture(gl: GL, image: HTMLImageElement | HTMLCanvasElement) {
  const texture = new Texture(gl, { generateMipmaps: true });
  texture.image = image;
  // Ensure good filtering
  try {
    texture.minFilter = gl.LINEAR_MIPMAP_LINEAR;
    texture.magFilter = gl.LINEAR;
    // Anisotropy if supported
    // OGL Texture exposes anisotropy; set a safe value
    (texture as any).anisotropy = Math.min(8, (gl as any).getParameter((gl as any).MAX_TEXTURE_MAX_ANISOTROPY_EXT) || 1);
  } catch (e) {
    // Some OGL versions expose different APIs; ignore gracefully
  }
  return texture;
}

/* Title: fixed createTextTexture signature and caching */
class Title {
  gl: GL;
  plane: Mesh;
  renderer: Renderer;
  font: string;
  textColor: string;
  mesh!: Mesh;
  _cache?: { texture: Texture; width: number; height: number; text: string; font: string };

  constructor({ gl, plane, renderer, font = '30px sans-serif', textColor = '#545050' }: any) {
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.font = font;
    this.textColor = textColor;
    this.createMesh();
  }

  createTextTexture(text: string, font = this.font, color = this.textColor) {
    // reuse if same
    if (this._cache && this._cache.text === text && this._cache.font === font) {
      return this._cache;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    ctx.font = font;
    const metrics = ctx.measureText(text);
    const textWidth = Math.ceil(metrics.width);
    const fontSize = parseInt((font.match(/(\d+)px/) || ['30'])[0].replace('px', ''), 10) || 30;
    const textHeight = Math.ceil(fontSize * 1.2);

    canvas.width = textWidth + 20;
    canvas.height = textHeight + 20;

    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = makeTexture(this.gl, canvas);
    this._cache = { texture, width: canvas.width, height: canvas.height, text, font };
    return this._cache;
  }

  createMesh() {
    // placeholder title, you can extend to pass actual text content
    const { texture, width, height } = this.createTextTexture(''); // empty by default
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision mediump float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tMap, vUv);
          if (c.a < 0.1) discard;
          gl_FragColor = c;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true
    });
    this.mesh = new Mesh(this.gl, { geometry, program });
    this.mesh.setParent(this.plane);
    // scale will be set by caller when title text is known
  }
}

/* Media class: optimized texture handling, crisp sampling, no wiggle by default */
class Media {
  geometry: Plane;
  gl: GL;
  image: string;
  index: number;
  length: number;
  renderer: Renderer;
  scene: Transform;
  screen: ScreenSize;
  viewport: Viewport;
  bend: number;
  borderRadius: number;
  font?: string;
  program!: Program;
  plane!: Mesh;
  title!: Title;
  width!: number;
  widthTotal!: number;
  x!: number;
  extra: number = 0;
  speed = 0;

  // configuration knobs
  itemWidth: number;
  itemHeight: number;

  private _texture?: Texture;
  private _imgEl?: HTMLImageElement;
  isBefore: boolean = false;
  isAfter: boolean = false;

  constructor(opts: any) {
    this.geometry = opts.geometry;
    this.gl = opts.gl;
    this.image = opts.image;
    this.index = opts.index;
    this.length = opts.length;
    this.renderer = opts.renderer;
    this.scene = opts.scene;
    this.screen = opts.screen;
    this.viewport = opts.viewport;
    this.bend = opts.bend;
    this.borderRadius = opts.borderRadius || 0;
    this.font = opts.font;
    this.itemWidth = opts.itemWidth || 3;
    this.itemHeight = opts.itemHeight || 2;

    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }

  createShader() {
    // create a placeholder texture until image loads
    const placeholder = document.createElement('canvas');
    placeholder.width = 4;
    placeholder.height = 4;
    const ctx = placeholder.getContext('2d')!;
    ctx.fillStyle = '#777';
    ctx.fillRect(0, 0, 4, 4);

    this._texture = makeTexture(this.gl, placeholder);

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;

        // rounded box SDF - returns negative inside
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }

        void main() {
          // maintain image aspect ratio (cover style)
          vec2 imageRatio = uImageSizes / uImageSizes.y;
          vec2 planeRatio = uPlaneSizes / uPlaneSizes.y;
          float planeAspect = planeRatio.x / planeRatio.y;
          float imageAspect = imageRatio.x / imageRatio.y;

          vec2 uv = vUv;

          if (imageAspect > planeAspect) {
            // image is wider -> crop horizontally
            float scale = planeAspect / imageAspect;
            uv.x = uv.x * scale + (1.0 - scale) * 0.5;
          } else {
            // image is taller -> crop vertically
            float scale = imageAspect / planeAspect;
            uv.y = uv.y * scale + (1.0 - scale) * 0.5;
          }

          vec4 color = texture2D(tMap, uv);

          // rounded edges antialias
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float edge = 0.0018; // edge smoothing width; small constant keeps crispness
          float alpha = 1.0 - smoothstep(-edge, edge, d);

          gl_FragColor = vec4(color.rgb, color.a * alpha);
        }
      `,
      uniforms: {
        tMap: { value: this._texture },
        uPlaneSizes: { value: [this.itemWidth, this.itemHeight] },
        uImageSizes: { value: [1, 1] },
        uBorderRadius: { value: this.borderRadius }
      },
      transparent: true
    });

    // load actual image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.image;
    img.onload = () => {
      this._imgEl = img;
      // replace texture image (do NOT recreate uniforms/program)
      if (this._texture) {
        this._texture.image = img;
        // update image size uniform
        this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
      }
    };
    img.onerror = () => {
      // keep placeholder if failed
      console.warn('Image failed to load', this.image);
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.plane.setParent(this.scene);
  }

  createTitle() {
    this.title = new Title({ gl: this.gl, plane: this.plane, renderer: this.renderer, font: this.font });
  }

  update(scroll: { current: number; last: number }, direction: 'right' | 'left') {
    this.plane.position.x = this.x - scroll.current - this.extra;
    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    // circular bend (unchanged)
    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);
      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    // speed for potential subtle effects (kept but not used for displacement)
    this.speed = scroll.current - scroll.last;

    // wrap logic unchanged
    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }

  onResize({ screen, viewport }: { screen?: ScreenSize; viewport?: Viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      // pass plane sizes as world units to shader so it can compute aspect properly
      if (this.plane && this.plane.program && this.plane.program.uniforms.uPlaneSizes) {
        this.plane.program.uniforms.uPlaneSizes.value = [this.itemWidth, this.itemHeight];
      }
    }

    // stable world-unit sizing (no strange screen-dependent formulas)
    this.plane.scale.set(this.itemWidth, this.itemHeight, 1);

    this.width = this.plane.scale.x + 0.5; // spacing
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

/* App: optimized renderer, DPR handling, single geometry reuse, stable update loop */
class App {
  container: HTMLElement;
  scrollSpeed: number;
  scroll: { ease: number; current: number; target: number; last: number; position?: number };
  onCheckDebounce: (...args: any[]) => void;
  renderer!: Renderer;
  gl!: GL;
  camera!: Camera;
  scene!: Transform;
  planeGeometry!: Plane;
  medias: Media[] = [];
  mediasImages: { image: string }[] = [];
  screen!: ScreenSize;
  viewport!: Viewport;
  raf = 0;

  private boundUpdate: () => void;

  constructor(container: HTMLElement, cfg: AppConfig & { itemWidth?: number; itemHeight?: number; segments?: any }) {
    this.container = container;
    this.scrollSpeed = cfg.scrollSpeed || 2;
    this.scroll = { ease: cfg.scrollEase ?? 0.08, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);

    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry(cfg.segments);
    this.createMedias(cfg.items, cfg.bend, cfg.borderRadius || 0, cfg.font || '30px sans-serif', cfg.itemWidth, cfg.itemHeight);
    this.boundUpdate = this.update.bind(this);
    this.update();
    this.addEventListeners();
  }

  createRenderer() {
    // clamp DPR to avoid frequent fractional canvas sizes
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer = new Renderer({ alpha: true, antialias: true, dpr });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    // style canvas to container size; we'll manage actual pixel size on resize
    this.renderer.gl.canvas.style.width = '100%';
    this.renderer.gl.canvas.style.height = '100%';
    this.container.appendChild(this.renderer.gl.canvas as HTMLCanvasElement);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry(segments?: { widthSegments: number; heightSegments: number }) {
    const segs = segments || { widthSegments: 350, heightSegments: 250 };
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: segs.heightSegments,
      widthSegments: segs.widthSegments
    });
  }

  createMedias(items: { image: string }[] | undefined, bend = 1, borderRadius = 0, font = '30px sans-serif', itemWidth = 3, itemHeight = 2) {
    const defaultItems = [
      { image: ChrisHernandez },
      { image: CarlBusbyJr },
      { image: `https://picsum.photos/seed/3/800/600?grayscale` }
    ];
    const galleryItems = items && items.length ? items : defaultItems;
    // duplicate for infinite feeling as before
    this.mediasImages = galleryItems.concat(galleryItems);

    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        viewport: this.viewport,
        bend,
        borderRadius,
        font,
        itemWidth,
        itemHeight
      });
    });
  }

  onTouchDown = (e: MouseEvent | TouchEvent) => {
    this.scroll.position = this.scroll.current;
    (this as any).isDown = true;
    (this as any).start = 'touches' in e ? (e as any).touches[0].clientX : (e as MouseEvent).clientX;
  };

  onTouchMove = (e: MouseEvent | TouchEvent) => {
    if (!(this as any).isDown) return;
    const x = 'touches' in e ? (e as any).touches[0].clientX : (e as MouseEvent).clientX;
    const distance = ((this as any).start - x) * (this.scrollSpeed * 0.025);
    this.scroll.target = (this.scroll.position ?? 0) + distance;
  };

  onTouchUp = () => {
    (this as any).isDown = false;
    this.onCheck();
  };

  onWheel = (e: WheelEvent) => {
    const delta = e.deltaY;
    // scale wheel sensitivity and clamp target so it doesn't explode
    this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
    this.onCheckDebounce();
  };

  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width || this.medias[0].plane.scale.x;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }

  onResize = () => {
    this.screen = { width: this.container.clientWidth, height: this.container.clientHeight };
    // use integer pixel sizes to avoid subpixel jitter
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pixelW = Math.floor(this.screen.width * dpr);
    const pixelH = Math.floor(this.screen.height * dpr);
    this.renderer.setSize(pixelW, pixelH);
    // update camera aspect & viewport world height/width
    this.camera.perspective({ aspect: this.screen.width / this.screen.height });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    if (this.medias) {
      this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }));
    }
  };

  update() {
    // smoothing
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    if (this.medias) {
      this.medias.forEach(media => media.update(this.scroll, direction));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.boundUpdate);
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize);
    window.addEventListener('wheel', this.onWheel);
    window.addEventListener('mousedown', this.onTouchDown);
    window.addEventListener('mousemove', this.onTouchMove);
    window.addEventListener('mouseup', this.onTouchUp);
    window.addEventListener('touchstart', this.onTouchDown);
    window.addEventListener('touchmove', this.onTouchMove);
    window.addEventListener('touchend', this.onTouchUp);
  }

  removeEventListeners() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('wheel', this.onWheel);
    window.removeEventListener('mousedown', this.onTouchDown);
    window.removeEventListener('mousemove', this.onTouchMove);
    window.removeEventListener('mouseup', this.onTouchUp);
    window.removeEventListener('touchstart', this.onTouchDown);
    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('touchend', this.onTouchUp);
  }

  destroy() {
    window.cancelAnimationFrame(this.raf);
    this.removeEventListeners();
    // remove canvas
    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas as HTMLCanvasElement);
    }
  }
}

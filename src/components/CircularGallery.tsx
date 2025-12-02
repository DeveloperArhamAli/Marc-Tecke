import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from "ogl";
import { useEffect, useRef } from "react";

type GL = Renderer["gl"];

interface CircularGalleryProps {
  items?: { image: string }[];
  bend?: number;
  borderRadius?: number;
  scrollSpeed?: number;
  scrollEase?: number;
  itemWidth?: number;
  itemHeight?: number;
  autoSlide?: boolean;
  autoDirection?: "left" | "right";
  autoSpeed?: number;
}

export default function CircularGallery({
  items,
  bend = 2.5,
  borderRadius = 0.05,
  scrollSpeed = 2,
  scrollEase = 0.08,
  itemWidth = 3,
  itemHeight = 2,
  autoSlide = false,
  autoDirection = "right",
  autoSpeed = 0.09,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    appRef.current = new App(containerRef.current, {
      items,
      bend,
      borderRadius,
      scrollSpeed,
      scrollEase,
      itemWidth,
      itemHeight,
      autoSlide,
      autoDirection,
      autoSpeed,
    });

    return () => {
      appRef.current?.destroy();
      appRef.current = null;
    };
  }, [items, bend, borderRadius, scrollSpeed, scrollEase, itemWidth, itemHeight, autoSlide, autoDirection, autoSpeed]);

  return (
    <div
      ref={containerRef}
      className="w-full h-auto overflow-hidden p-0 m-0"
      style={{ lineHeight: 0 }}
    />
  );
}

/* ================================================================
   ----------------------- APP CLASS -------------------------------
   ================================================================ */

class App {
  container: HTMLElement;
  scroll: { ease: number; current: number; target: number; last: number; position?: number };
  scrollSpeed: number;
  renderer!: Renderer;
  gl!: GL;
  camera!: Camera;
  scene!: Transform;
  planeGeometry!: Plane;
  medias: Media[] = [];
  screen!: { width: number; height: number };
  viewport!: { width: number; height: number };
  raf = 0;

  autoSlide: boolean;
  autoDirection: "left" | "right";
  autoSpeed: number;

  constructor(
    container: HTMLElement,
    {
      items = [],
      bend = 2.5,
      borderRadius = 0.05,
      scrollSpeed = 2,
      scrollEase = 0.08,
      itemWidth = 3,
      itemHeight = 2,
      autoSlide = false,
      autoDirection = "right" as "left" | "right",
      autoSpeed = 0.025,
    }: {
      items?: { image: string }[];
      bend?: number;
      borderRadius?: number;
      scrollSpeed?: number;
      scrollEase?: number;
      itemWidth?: number;
      itemHeight?: number;
      autoSlide?: boolean;
      autoDirection?: "left" | "right";
      autoSpeed?: number;
    }
  ) {
    this.container = container;
    this.scrollSpeed = scrollSpeed;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };

    this.autoSlide = autoSlide;
    this.autoDirection = autoDirection;
    this.autoSpeed = autoSpeed;

    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, borderRadius, itemWidth, itemHeight);
    this.update();
    this.addEventListeners();
  }

  createRenderer() {
    const dpr = Math.min(window.devicePixelRatio, 2);

    this.renderer = new Renderer({ alpha: true, antialias: true, dpr });
    this.gl = this.renderer.gl;

    this.gl.clearColor(0, 0, 0, 0);

    this.renderer.gl.canvas.style.width = "100%";
    this.renderer.gl.canvas.style.height = "400px";

    this.container.appendChild(this.renderer.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      widthSegments: 60,
      heightSegments: 40,
    });
  }

  createMedias(
    items: { image: string }[],
    bend: number,
    borderRadius: number,
    itemWidth: number,
    itemHeight: number
  ) {
    const doubled = items.concat(items);

    this.medias = doubled.map(
      (item, i) =>
        new Media({
          gl: this.gl,
          renderer: this.renderer,
          scene: this.scene,
          geometry: this.planeGeometry,
          image: item.image,
          index: i,
          length: doubled.length,
          screen: this.screen,
          viewport: this.viewport,
          bend,
          borderRadius,
          itemWidth,
          itemHeight,
        })
    );
  }

  /* ------------------------ RESIZE ---------------------------- */

  onResize = () => {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    };

    const dpr = 1;
    this.renderer.setSize(this.screen.width * dpr, this.screen.height * dpr);

    this.camera.perspective({ aspect: this.screen.width / this.screen.height });

    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.viewport = { width, height };

    this.medias.forEach((m) => m.onResize({ screen: this.screen, viewport: this.viewport }));
  };

  /* ----------------------- UPDATE LOOP ------------------------ */

  update = () => {
    if (this.autoSlide) {
      const dir = this.autoDirection === "right" ? 1 : -1;
      this.scroll.target += dir * this.autoSpeed;
    }

    this.scroll.current = this.scroll.current + (this.scroll.target - this.scroll.current) * this.scroll.ease;

    const direction = this.scroll.current > this.scroll.last ? "right" : "left";

    this.medias.forEach((m) => m.update(this.scroll, direction));

    this.renderer.render({ scene: this.scene, camera: this.camera });

    this.scroll.last = this.scroll.current;

    this.raf = requestAnimationFrame(this.update);
  };

  /* --------------------- EVENT LISTENERS ---------------------- */

  addEventListeners() {
    window.addEventListener("resize", this.onResize);
  }

  destroy() {
    cancelAnimationFrame(this.raf);

    window.removeEventListener("resize", this.onResize);

    if (this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }
  }
}

/* ================================================================
   ------------------------ MEDIA CLASS -----------------------------
   ================================================================ */

class Media {
  plane!: Mesh;
  program!: Program;
  texture!: Texture;
  x!: number;
  width!: number;
  widthTotal!: number;

  extra = 0;
  index: any;
  length: any;
  screen: any;
  viewport: any;
  bend: any;
  itemWidth: any;
  itemHeight: any;

  constructor({
    gl,
    scene,
    geometry,
    image,
    index,
    length,
    screen,
    viewport,
    bend,
    borderRadius,
    itemWidth,
    itemHeight,
  }: any) {
    this.createShader(gl, image, borderRadius, itemWidth, itemHeight);
    this.createMesh(gl, geometry, scene);

    this.index = index;
    this.length = length;
    this.screen = screen;
    this.viewport = viewport;
    this.bend = bend;

    this.itemWidth = itemWidth;
    this.itemHeight = itemHeight;

    this.onResize({ screen, viewport });
  }

  createShader(gl: GL, imageSrc: string, borderRadius: number, itemWidth: number, itemHeight: number) {
    const placeholder = document.createElement("canvas");
    placeholder.width = 4;
    placeholder.height = 4;

    this.texture = new Texture(gl, { generateMipmaps: true });
    this.texture.image = placeholder;
    this.texture.minFilter = gl.LINEAR_MIPMAP_LINEAR;
    this.texture.magFilter = gl.LINEAR;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => {
      this.texture.image = img;
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
    };

    this.program = new Program(gl, {
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
        uniform sampler2D tMap;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform float uBorderRadius;
        varying vec2 vUv;

        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }

        void main() {
          vec2 uv = vUv;
          float imgAspect = uImageSizes.x / uImageSizes.y;
          float planeAspect = uPlaneSizes.x / uPlaneSizes.y;

          if (imgAspect > planeAspect) {
            float scale = planeAspect / imgAspect;
            uv.x = uv.x * scale + (1.0 - scale) * 0.5;
          } else {
            float scale = imgAspect / planeAspect;
            uv.y = uv.y * scale + (1.0 - scale) * 0.5;
          }

          vec4 color = texture2D(tMap, uv);

          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float edge = 0.002;
          float alpha = 1.0 - smoothstep(-edge, edge, d);

          gl_FragColor = vec4(color.rgb, color.a * alpha);
        }
      `,
      uniforms: {
        tMap: { value: this.texture },
        uImageSizes: { value: [1, 1] },
        uPlaneSizes: { value: [itemWidth, itemHeight] },
        uBorderRadius: { value: borderRadius },
      },
      transparent: true,
    });
  }

  createMesh(gl: GL, geometry: Plane, scene: Transform) {
    this.plane = new Mesh(gl, { geometry, program: this.program });
    this.plane.setParent(scene);
  }

  update(scroll: any, direction: "left" | "right") {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const w = this.viewport.width / 2;
    const B = this.bend;

    if (B === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const R = (w * w + B * B) / (2 * B);
      const clampedX = Math.min(Math.abs(x), w);
      const arc = R - Math.sqrt(R * R - clampedX * clampedX);
      this.plane.position.y = -arc;
      this.plane.rotation.z = -Math.sign(x) * Math.asin(clampedX / R);
    }

    const half = this.plane.scale.x / 2;
    const vp = this.viewport.width / 2;

    const before = this.plane.position.x + half < -vp;
    const after = this.plane.position.x - half > vp;

    if (direction === "right" && before) this.extra -= this.widthTotal;
    if (direction === "left" && after) this.extra += this.widthTotal;
  }

  onResize({ screen, viewport }: any) {
    this.screen = screen;
    this.viewport = viewport;

    this.plane.scale.set(this.itemWidth, this.itemHeight, 1);

    this.width = this.plane.scale.x + 0.5;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;

    this.program.uniforms.uPlaneSizes.value = [this.itemWidth, this.itemHeight];
  }
}

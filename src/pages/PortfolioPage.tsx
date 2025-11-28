import { ArrowRight } from 'lucide-react'
import Button from "../components/Button"
import CTA from '../components/CTA'
import OverlayText from '../components/OverlayText'
import { Link } from 'react-router'
import { LogoDesignImage1, BrandIndentityImage1, BusinessCardDesignImage1, ProductPackagingDesignImage1, CoverBannerFlyerDesignImage1 } from "@/assets/images/portfolioImages"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <OverlayText text='Portfolio' />
            <h1 className="heading-xl mb-6 text-foreground">
              <span className="gradient-text">Featured Projects</span> & Case Studies
            </h1>
            <p className="body-text max-w-2xl">
              Explore our latest work showcasing innovative design and development solutions that deliver real business
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative section-divider px-6 border-t border-border pt-15">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Logo Designs",
                link: "/logo-design",
                image: LogoDesignImage1
              },
              {
                title: "Websites",
                link: "/websites",
                image: ""
              },
              {
                title: "Brand Identity",
                link: "/brand-identity",
                image: BrandIndentityImage1
              },
              {
                title: "Business Card Designs",
                link: "/business-card-design",
                image: BusinessCardDesignImage1
              },
              {
                title: "Product Packaging Designs",
                link: "/product-packaging-design",
                image: ProductPackagingDesignImage1
              },
              {
                title: "Cover, Banner & Flyer Designs",
                link: "/cover-banner-flyer-design",
                image: CoverBannerFlyerDesignImage1
              },
            ].map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg tech-card glow-hover cursor-pointer">
                <Link to={project.link}>
                  <div className="absolute inset-0">
                    <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
                  </div>
                  <div className="aspect-video relative flex flex-col justify-end p-8 text-white z-10">
                    <h3 className="text-2xl font-bold mb-3 text-white backdrop-blur-3xl px-4 py-2 rounded-md inline-block w-fit">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        overlayText='Ready?'
        heading="Ready to Start Your Project?"
        description="Let’s work together to develop innovative designs that elevate your brand and set you apart in the digital world."
        button={
          <Button 
              text='Start Now'
              to='/contact'
              className="bg-primary text-primary-foreground font-semibold glow-accent rounded-full"
              icon={<ArrowRight className="w-4 h-4 ml-2" />}
          />
        }
      />

    </div>
  )
}

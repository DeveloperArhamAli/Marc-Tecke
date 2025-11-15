import { ArrowRight, Code2, Zap, Paintbrush, Grid3x3 } from 'lucide-react'
import Button from "../components/Button"
import { Link } from "react-router"
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-primary text-sm font-bold mb-3 tracking-widest">SERVICES</p>
            <h1 className="heading-xl mb-6 text-foreground">
              <span className="gradient-text">Comprehensive Solutions</span> for Digital Growth
            </h1>
            <p className="body-text max-w-2xl">
              From design to development to strategy, we provide end-to-end services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative section-divider px-6 border-t border-border">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        icon: Paintbrush,
                        title: "Logo Design",
                        description:
                        "Memorable logo designs that reflect your brand’s personality and identity.",
                    },
                    {
                        icon: Code2,
                        title: "Website Development",
                        description:
                        "Custom-built websites optimized with modern technology for exceptional results.",
                    },
                    {
                        icon: Zap,
                        title: "Brand Identity",
                        description:
                        "Brand strategies designed to communicate your message and captivate your audience.",
                    },
                    {
                        icon: Grid3x3,
                        title: "Digital Marketing",
                        description:
                        "Targeted, data-backed marketing to enhance your online reach and boost performance at social media.",
                    },
                    {
                        icon: Code2,
                        title: "SEO Services",
                        description:
                        "Organic SEO solutions that drive traffic and improve search performance.",
                    },
                    {
                        icon: Zap,
                        title: "App Development",
                        description:
                        "We create intuitive iOS and Android apps with seamless user experiences that drive performance and align with your brand.",
                    },
                    {
                        icon: Grid3x3,
                        title: "Product Packaging Design",
                        description:
                        "We create standout packaging designs that attracts customers and reinforces your brand.",
                    },
                    {
                        icon: Code2,
                        title: "Logo Animation",
                        description:
                        "Bring your brand to life with custom logo animations for intros, ads, and social media.",
                    }
                ].map((service, i) => (

                    <>
                        <div key={i}>
                            <ServiceCard service={service} />
                        </div>
                    </>
                ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative section-divider px-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold mb-3 tracking-widest">OUR PROCESS</p>
            <h2 className="heading-lg text-foreground">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Discovery", "Strategy", "Execution", "Launch"].map((step, i) => (
              <div key={i} className="tech-card p-8 glow-hover text-center">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center text-lg font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-divider px-6 py-32">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="heading-lg mb-6 text-foreground">Let's Discuss Your Needs</h2>
          <p className="body-text mb-6 text-foreground/80 max-w-xl mx-auto">
            Tell us about your project and we'll create a customized solution that drives results.
          </p>
          <Link to="/#contact">
            <Button 
                text='Schedule Consultation'
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-accent"
                icon={<ArrowRight className="w-4 h-4 ml-2" />}
            />
          </Link>
        </div>
      </section>
    </div>
  )
}

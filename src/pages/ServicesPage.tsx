import { ArrowRight, Code2, Brush, View, Megaphone, SearchCheck, Smartphone, PackageSearch, Video } from 'lucide-react'
import Button from "../components/Button"
import ServiceCard from '../components/ServiceCard'
import OverlayText from '../components/OverlayText'
import TestimonialSlider from '../components/TestimonialsSlider'
import { BradGantt, CarlBusbyJr, ChrisHernandez, DiamondAIMediaGroup, JimMartenson, KahlilMckinnie, RoyIsernBand } from '@/assets/images'
import CTA from '../components/CTA'

export default function Services() {
  const testimonials = [
      {
          name: "Brad Gantt",
          designation: "Wildlife Rehabilitator",
          message: "Worked with Marc Tecke on a logo for a small private business and it came out amazing! Much thanks and I am very pleased with the results!",
          image: BradGantt
      },
      {
          name: "Carl Busby Jr.",
          designation: "Reptiles Keeper",
          message: "Many reviews mention how patient and attentive Marc Tecke is in providing time and  services, you get no argument from me.  I will be back for additional works.",
          image: CarlBusbyJr
      },
      {
          name: "Chris Hernandez",
          designation: "Customer Service Technician at AT&T",
          message: "I contacted Marc Tecke for a website for my business. He was quick to respond and very friendly. He was quick and able to make all the adjustments that I was looking for. I would definitely do business with him again and would recommend him to anyone that is looking to have a website or design created. Thanks for your help Marc Tecke!",
          image: ChrisHernandez
      },
      {
          name: "Steven Diamond",
          designation: "Founder Of Diamond AI Media Group",
          message: "Marc Tecke did an outstanding job on graphics for Diamond AI Media Group! Creative, professional, and patient with revisions, he nailed my vision. Highly recommend and will use his services again!",
          image: DiamondAIMediaGroup
      },
      {
          name: "Jim Martenson",
          designation: "Leadership Coach",
          message: "Marc Tecke created my website and was always available when I needed him. They instantly responded to my requests, and custom-made my site to my exact specifications. I highly recommend their work for anyone wanting to design their website!",
          image: JimMartenson
      },
      {
          name: "Kahlil Mckinnie",
          designation: "Gym Owner | Divine Fitness & MMA",
          message: "Working with marc tecke has been a pleasure. They designed the logo for my gym and it was exactly what i was looking for in the first try. and the quality of it was perfect.  communication was great and turn around time was amazing even with a huge time difference between us. i was on a time crunch and he got the job done.  i would definitely recommend him and he will be the only graphic designer i will use for future projects.",
          image: KahlilMckinnie
      },
      {
          name: "Roy Isern",
          designation: "Director Of Roy Isern Band",
          message: "I posted looking for a graphic designer, and Marc Tecke stood out. After seeing their portfolio and chatting, I chose him for the Roy Isern Band logo. He was professional, creative, and delivered a logo I LOVE in less than 24 hours. 10/10 recommend and will use their services again!",
          image: RoyIsernBand
      },
      ]
  
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="heading-xl mb-6 text-foreground">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="body-text max-w-2xl">Our full spectrum services, spanning design, development, and strategy, are tailored to drive your business forward.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative section-divider px-6 border-t border-border pt-15">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                        {
                            icon: Brush,
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
                            icon: View,
                            title: "Brand Identity",
                            description:
                            "Brand strategies designed to communicate your message and captivate your audience.",
                        },
                        {
                            icon: Megaphone,
                            title: "Digital Marketing",
                            description:
                            "Targeted, data-backed marketing to enhance your online reach and boost performance at social media.",
                        },
                        {
                            icon: SearchCheck,
                            title: "SEO Services",
                            description:
                            "Organic SEO solutions that drive traffic and improve search performance.",
                        },
                        {
                            icon: Smartphone,
                            title: "App Development",
                            description:
                            "We create intuitive iOS and Android apps with seamless user experiences that drive performance and align with your brand.",
                        },
                        {
                            icon: PackageSearch,
                            title: "Product Packaging & Label Design",
                            description:
                            "We create standout packaging and label designs that attracts customers and reinforces your brand.",
                        },
                        {
                            icon: Video,
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
      <section className="relative section-divider px-6 bg-secondary/10 pt-15">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <OverlayText text='Our Process' />
            <h2 className="heading-lg text-foreground">The Way We Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                title: "Discover & Understand",
                description: "We learn about your brand, goals, and audience to ensure solutions align with your vision."
              },
              {
                title: "Plan & Strategize",
                description: "We create a clear strategy for design, branding, website, and marketing to drive results."
              },
              {
                title: "Design & Develop",
                description: "We craft logos, graphics, websites, and campaigns that are creative, functional, and impactful."
              },
              {
                title: "Launch & Support",
                description: "We deliver, launch, and refine your assets to maximize engagement and performance."
              },
            ].map((step, i) => (
              <div key={i} className="tech-card p-8 glow-hover text-center">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center text-lg font-bold text-primary-foreground">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative section-divider px-6 py-24 bg-secondary/10">
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
          <div className="max-w-5xl mx-auto text-center">

              <OverlayText text='Reviews' />
              <h2 className="heading-lg text-foreground mb-12">Proven Client Results</h2>
              <p className="body-text mb-10 text-center">Explore how our expertise enables businesses to reach their objectives and enhance their online presence.</p>

              <TestimonialSlider testimonials={testimonials} />

          </div>
      </section>

      <CTA 
        overlayText='Ready?'
        heading='Ready to Elevate Your Brand?'
        description='Explore our pricing plans or reach out for a customized quote designed to meet your unique requirements.'
        button={
          <div className='flex gap-2 items-center'>
              <Button 
                text='View Pricing'
                to='/pricing'
                className="bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold glow-accent rounded-full"
              />
              <Button 
                text='Contact Us'
                to='/contact'
                className="bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold glow-accent rounded-full"
                icon={<ArrowRight className="w-4 h-4 ml-2" />} 
              />
            </div>
        }
      />

    </div>
  )
}

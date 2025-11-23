import { ArrowRight, Award, Handshake, Users } from 'lucide-react'
import Button from "../components/Button"
import { Link } from 'react-router'
import { MarcWeaver, SteveMark, TeamCombine, ZubairAhmad } from '@/assets/images'
import OverlayText from '../components/OverlayText'
import CTA from '../components/CTA'

export default function About() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="heading-xl mb-6 text-foreground">
              <span className="gradient-text">About Us</span>
            </h1>
            <p className="body-text max-w-2xl">Explore our team and the vision that drives us to craft innovative and memorable digital experiences.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative section-divider px-6 border-t border-border pt-15 md:pt-20">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <OverlayText text='Our Vision' />
              <h2 className="heading-lg mb-6 gradient-text">Passionate Experts Focused on Superior Digital Solutions</h2>
              <p className="body-text mb-6">Established in 2016, MARC TECKE has grown into a trusted name in digital design and development. From distinctive logo creation to full scale website development, our talented team is committed to delivering high-quality digital solutions that elevate brands and support business growth in an ever evolving online world.</p>
              <p className="body-text mb-8">We understand that exceptional design is more than visual appeal, it’s about shaping experiences that resonate, communicate value, and build lasting connections with audiences. Guided by a blend of creativity, advanced technology, and strategic thinking, we craft digital experiences that not only look outstanding but also achieve measurable results.</p>
              <Link to="#contact">
                <Button 
                    text='Start a Project'
                    icon={<ArrowRight className="w-4 h-4 ml-2" />}
                    className="bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold glow-accent rounded-full"
                />
              </Link>
            </div>

            <div className='group relative overflow-hidden rounded-lg tech-card glow-hover'>
              <div className='aspect-video relative flex flex-col justify-end p-3 text-white z-10'>
                <img src={TeamCombine} className='rounded-lg' />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative section-divider px-6 bg-secondary/10 pt-15">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <OverlayText text='Our Values' />
            <h2 className="heading-lg text-foreground">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Client-Centric Approach",
                icon: Users,
                description:
                  "We put your vision first. Every design and development decision is shaped around your goals, ensuring solutions that truly reflect your brand and meet your business needs.",
              },
              {
                title: "Excellence in Every Detail",
                icon: Award,
                description: "From branding and logo design to websites, apps, and graphics, we maintain the highest standards to deliver polished, impactful, and reliable digital experiences.",
              },
              {
                title: "Collaborative Partnership",
                icon: Handshake,
                description: "We believe the best results come from working together. By maintaining open communication and involving you throughout the process, we ensure every project reflects your vision and achieves its full potential.",
              },
            ].map((value, i) => (
              <div key={i} className="tech-card p-8 glow-hover">
                <div className="p-4 rounded-lg bg-linear-to-br from-primary to-accent w-fit mb-6">
                  <value.icon className="w-6 h-6 text-black" />
              </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative section-divider px-6 border-t border-border pt-20">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <OverlayText text='The Team' />
            <h2 className="heading-lg text-foreground mb-2">Introducing Our Experts</h2>
            <p className="body-text max-w-2xl">Our team combines diverse skill sets, from design and development to strategy and project management to ensure every project is executed with excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Marc Weaver", 
                role: "Founder, Web Developer & Graphic Designer",
                image: MarcWeaver
              },
              { 
                name: "Zubair Ahmad", 
                role: "Client Relations Manager & Brand Designer",
                image: ZubairAhmad
              },
              { 
                name: "Steve Marc", 
                role: "Web Developer & SEO Specialist",
                image: SteveMark
              },
            ].map((member, i) => (
              <div key={i} className="tech-card p-8 glow-hover text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-3">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-foreground/60 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        overlayText='Contact Us' 
        heading='Ready to Begin Your Project?' 
        description='Let’s work together to develop innovative designs that elevate your brand and set you apart in the digital world.' 
        button={<Button 
          text='Contact Us Today'
          to='/contact'
          className="bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold glow-accent rounded-full" 
          icon={<ArrowRight className="w-4 h-4 ml-2" />} 
        />}
      />
      
    </div>
  )
}

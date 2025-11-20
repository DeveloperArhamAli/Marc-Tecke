import { ArrowRight } from 'lucide-react'
import Button from "../components/Button"
import { Link } from 'react-router'

export default function About() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-primary text-sm font-bold mb-3 tracking-widest">ABOUT US</p>
            <h1 className="heading-xl mb-6 text-foreground">
              <span className="gradient-text">Innovating the Future</span> of Digital
            </h1>
            <p className="body-text max-w-2xl">
              We're a team of designers, developers, and strategists passionate about creating cutting-edge digital
              experiences that transform businesses and inspire users worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative section-divider px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-bold mb-3 tracking-widest">OUR MISSION</p>
              <h2 className="heading-lg text-foreground mb-6">Pioneering Digital Excellence</h2>
              <p className="body-text mb-6">
                We believe exceptional technology and design create competitive advantage. Every project is an
                opportunity to push boundaries and innovate.
              </p>
              <p className="body-text mb-8">
                From concept to launch, we ensure your digital presence stands out in the market. Our data-driven
                approach combined with creative execution delivers results that matter.
              </p>
              <Link to="#contact">
                <Button 
                    text='Start a Project'
                    icon={<ArrowRight className="w-4 h-4 ml-2" />}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-accent"
                />
              </Link>
            </div>

            <div className='group relative overflow-hidden rounded-lg tech-card glow-hover'>
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-primary/5" />
              <div className='aspect-video relative flex flex-col justify-end p-8 text-white z-10' />
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative section-divider px-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-primary text-sm font-bold mb-3 tracking-widest">OUR VALUES</p>
            <h2 className="heading-lg text-foreground">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries and explore new technologies to create cutting-edge solutions.",
              },
              {
                title: "Excellence",
                description: "Quality is non-negotiable. We deliver exceptional work on every project, every time.",
              },
              {
                title: "Collaboration",
                description: "Your success is our success. We work closely with clients to achieve shared goals.",
              },
            ].map((value, i) => (
              <div key={i} className="tech-card p-8 glow-hover">
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative section-divider px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-primary text-sm font-bold mb-3 tracking-widest">THE TEAM</p>
            <h2 className="heading-lg text-foreground">Talented Professionals</h2>
            <p className="body-text max-w-2xl">
              Our diverse team brings expertise across design, development, strategy, and project management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Marc Tecke", role: "Founder & Creative Director" },
              { name: "Creative Lead", role: "UI/UX Design Specialist" },
              { name: "Tech Lead", role: "Full-Stack Developer" },
            ].map((member, i) => (
              <div key={i} className="tech-card p-8 glow-hover text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-accent mx-auto mb-6" />
                <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-foreground/60 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-divider px-6 py-32">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="heading-lg mb-6 text-foreground">Ready to Work Together?</h2>
          <p className="body-text mb-6 text-foreground/80 max-w-xl mx-auto">
            Let's collaborate to create something extraordinary for your business.
          </p>
          <Link to="/#contact">
            <Button 
                text='Get In Touch'
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-accent" 
                icon={<ArrowRight className="w-4 h-4 ml-2" />}
            />
          </Link>
        </div>
      </section>
    </div>
  )
}

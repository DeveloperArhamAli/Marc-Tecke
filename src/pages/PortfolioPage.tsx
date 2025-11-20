import { ArrowRight } from 'lucide-react'
import Button from "../components/Button"
import { Link } from "react-router"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-primary text-sm font-bold mb-3 tracking-widest">PORTFOLIO</p>
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
                title: "Next-Gen Platform",
                category: "Web Development",
                description:
                  "Enterprise platform built with Next.js and React, featuring real-time data sync and advanced analytics.",
              },
              {
                title: "AI-Powered Dashboard",
                category: "UI/UX Design",
                description:
                  "Beautiful and intuitive dashboard design system that simplifies complex data visualization for users.",
              },
              {
                title: "Real-Time Analytics",
                category: "Full-Stack Development",
                description:
                  "Real-time analytics platform enabling businesses to track and optimize their performance metrics.",
              },
              {
                title: "Motion Design System",
                category: "Design System",
                description:
                  "Comprehensive design system with motion principles, component library, and detailed documentation.",
              },
              {
                title: "Mobile App Redesign",
                category: "Product Design",
                description: "Complete mobile app redesign improving user engagement by 300% and reducing bounce rates.",
              },
              {
                title: "SaaS Platform",
                category: "Full-Stack Solution",
                description:
                  "Complete SaaS solution from design to deployment, handling millions of transactions monthly.",
              },
            ].map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg tech-card glow-hover">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-primary/5" />
                <div className="aspect-video relative flex flex-col justify-end p-8 text-white z-10">
                  <p className="text-xs font-bold text-primary/70 mb-3 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative section-divider px-6 bg-secondary/10 pt-15
      ">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center">
            {[
                { value: "250+", label: "Succesful Projects" },
                { value: "8+", label: "Years Experience" },
                { value: "100%", label: "Satisfaction Guarantee" },
                { value: "24/7", label: "Consultancy" },
            ].map((stat, i) => (
              <div key={i} className="tech-card p-8 glow-hover">
                <div className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-foreground/60 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-divider px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="heading-lg mb-6 text-foreground">Ready to Start Your Project?</h2>
          <p className="body-text mb-6 text-foreground/80 max-w-xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your ideas.
          </p>
          <Link to="/contact">
            <Button 
                text='Start Now'
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-accent rounded-full"
                icon={<ArrowRight className="w-4 h-4 ml-2" />}
            />
          </Link>
        </div>
      </section>
    </div>
  )
}

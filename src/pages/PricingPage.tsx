import { ArrowRight, Check } from 'lucide-react'
import Button from '../components/Button'
import OverlayText from '../components/OverlayText'
import CTA from '../components/CTA'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-15 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <OverlayText text='Pricing' />
          <h1 className="heading-xl mb-6 text-foreground">Pricing Page</h1>
          <p className="body-text max-w-2xl mx-auto">Choose the perfect plan for your project. All plans include dedicated support and regular updates.</p>
        </div>
      </section>

      {/* Logo Design Pricing Cards */}
      <section className="relative section-divider px-6 border-t border-border pt-15">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
        <h1 className="heading-xl mb-6 text-foreground text-center pb-7">Logo Design Packages</h1>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$149",
                description: "Perfect for startups needing a clean, professional logo.",
                features: [
                  "2 Initial Logo Concepts",
                  "2 Revisions",
                  "High-Resolution Files (PNG, JPG)",
                  "Transparent Background",
                  "Delivery in 3 Days",
                ],
                highlighted: false,
              },
              {
                name: "Standard",
                price: "$249",
                description: "A complete branding-ready logo with more creative exploration.",
                features: [
                  "4 Initial Logo Concepts",
                  "Unlimited Revisions",
                  "Source Files (AI, EPS, PDF, JPG, PNG, 3D Mockups)",
                  "High-Resolution Files",
                  "Black & White Versions",
                  "Brand Color Palette",
                  "Delivery in 2 Days",
                ],
                highlighted: true,
              },
              {
                name: "Premium",
                price: "$449",
                description: "Full branding solution with everything you need to launch.",
                features: [
                  "6 Premium Logo Concepts",
                  "Unlimited Revisions",
                  "Complete Source Files (AI, EPS, PDF, SVG, JPG, PNG & 3D Mockups)",
                  "Full Brand Guide (Colors, Typography, Usage)",
                  "Social Media Kit (Profile, Post Templates)",
                  "Stationery Design (Business Card, Letterhead)",
                  "Priority Support",
                  "Delivery in 24-48 Hours",
                ],
                highlighted: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`tech-card p-8 glow-hover flex flex-col pointer-events-auto before:pointer-events-none after:pointer-events-none ${plan.highlighted ? "ring-2 ring-primary lg:scale-105" : ""}`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block">
                    <span className="px-3 py-1 text-xs font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent tracking-widest">
                      POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                  <Button
                    className={`w-full font-semibold ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-accent justify-center"
                        : "border-primary/50 text-foreground bg-primary/10 justify-center"
                    }`}
                    text='Get Started'
                    to='/contact'
                    icon={<ArrowRight className="w-4 h-4 ml-2" />}
                  />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Pricing Cards */}
      <section className="relative section-divider px-6 border-t border-border pt-15">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
        <h1 className="heading-xl mb-6 text-foreground text-center pb-5">Website Packages</h1>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$999",
                description: "Ideal for small businesses taking their first steps online.",
                features: [
                  "5-page responsive website",
                  "Essential SEO optimization",
                  "Contact form integration",
                  "Mobile-friendly design",
                  "30 days of post-launch support",
                ],
                highlighted: false,
              },
              {
                name: "Professional",
                price: "$2,499",
                description: "Perfect for growing businesses with tailored digital needs.",
                features: [
                  "10-page responsive website",
                  "Advanced SEO optimization",
                  "Content Management System (CMS) integration",
                  "E-commerce setup (up to 50 products)",
                  "Social media integration",
                  "90 days of post-launch support",
                  "3 rounds of design revisions",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "$4,999+",
                description: "A comprehensive, premium solution for established businesses seeking advanced digital capabilities.",
                features: [
                  "Custom website with unlimited pages",
                  "Premium SEO optimization",
                  "Advanced e-commerce functionality (unlimited products)",
                  "Custom integrations and automation",
                  "Performance optimization & analytics setup",
                  "Dedicated account manager",
                  "180 days of priority post-launch support",
                  "5 rounds of design revisions",
                  "Social media strategy & campaign guidance",
                ],
                highlighted: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`tech-card p-8 glow-hover flex flex-col pointer-events-auto before:pointer-events-none after:pointer-events-none ${plan.highlighted ? "ring-2 ring-primary lg:scale-105" : ""}`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block">
                    <span className="px-3 py-1 text-xs font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent tracking-widest">
                      POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                  <Button
                    className={`w-full font-semibold ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-accent justify-center"
                        : "border-primary/50 text-foreground bg-primary/10 justify-center"
                    }`}
                    text='Get Started'
                    to='/contact'
                    icon={<ArrowRight className="w-4 h-4 ml-2" />}
                  />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative section-divider px-6 bg-secondary/10 pt-15">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <OverlayText text='FAQs' />
            <h2 className="heading-lg text-foreground mb-2">Frequently Asked Questions</h2>
            <p className='text-lg'>Get answers to frequently asked questions about our services and pricing.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How long does it take to complete a website?",
                a: "The timeline depends on the package and project complexity. Basic websites typically take 2–3 weeks, Professional websites 4–6 weeks, and Enterprise solutions 6–12 weeks.",
              },
              {
                q: "Can I upgrade my package later?",
                a: "Absolutely! You can start with a smaller package and upgrade as your business grows. We make the transition seamless.",
              },
              {
                q: "Do you provide content for the website?",
                a: "We can assist with content strategy and guidance. Content creation can be included as part of higher-tier packages or offered as an additional service.",
              },
              {
                q: "What kind of support do you offer after launch?",
                a: "Support varies by package. Basic includes 1 month, Professional includes 3 months, and Enterprise includes 6 months of priority post-launch support. Additional maintenance plans are available for ongoing updates, security, and performance optimization.",
              },
              {
                q: "Do you provide SEO and digital marketing services?",
                a: "Yes, our Professional and Enterprise packages include advanced SEO and social media integration. Enterprise clients also receive guidance on social media strategy and campaigns.",
              },
              {
                q: "How many design revisions are included",
                a: "Basic includes standard revisions, Professional includes 3 rounds, and Enterprise includes 5 rounds of revisions to ensure your complete satisfaction.",
              },
              {
                q: "Do you offer post-launch maintenance?",
                a: "Yes, we offer optional ongoing maintenance plans to keep your website updated, secure, and running smoothly beyond the included support period.",
              },
              {
                q: "What payment options do you accept?",
                a: "We offer flexible payment options, including full upfront payment or milestone-based installments depending on the package and project scope.",
              },
            ].map((faq, i) => (
              <div key={i} className="tech-card p-6 glow-hover">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        overlayText='Ready?'
        heading='Require a Customized Approach?'
        description='Get in touch to receive a customized quote designed to meet your unique business needs and objectives.'
        button={
          <Button 
                text='Request Your Quote'
                to='/contact'
                className="bg-primary rounded-full text-primary-foreground font-semibold glow-accent"
                icon={<ArrowRight className="w-4 h-4 ml-2" />}
            />
        }
      />

    </div>
  )
}

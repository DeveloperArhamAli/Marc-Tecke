import { ArrowRight, Check } from 'lucide-react'
import Button from '../components/Button'
import { Link } from "react-router"

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-sm font-bold mb-3 tracking-widest">PRICING</p>
          <h1 className="heading-xl mb-6 text-foreground">
            <span className="linear-text">Transparent Pricing</span> for Every Budget
          </h1>
          <p className="body-text max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include dedicated support and regular updates.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative section-divider px-6 border-t border-border">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$4,999",
                period: "One-time",
                description: "Perfect for small projects and MVPs",
                features: [
                  "5 Pages/Sections",
                  "Responsive Design",
                  "Basic SEO Setup",
                  "Contact Form",
                  "Mobile Optimization",
                  "2 Rounds of Revisions",
                  "30 Days Support",
                ],
                highlighted: false,
              },
              {
                name: "Professional",
                price: "$12,999",
                period: "One-time",
                description: "Ideal for growing businesses",
                features: [
                  "Unlimited Pages",
                  "Custom Design",
                  "Advanced SEO",
                  "CMS Integration",
                  "E-commerce Setup",
                  "5 Rounds of Revisions",
                  "3 Months Support",
                  "Analytics Setup",
                  "Performance Optimization",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "Tailored",
                description: "For complex projects and scaling",
                features: [
                  "Custom Solutions",
                  "Full-Stack Development",
                  "Advanced Features",
                  "Unlimited Revisions",
                  "6 Months Support",
                  "API Integration",
                  "Priority Support",
                  "Ongoing Maintenance",
                  "Team Training",
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
                    <span className="text-foreground/60 text-sm">{plan.period}</span>
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

                <Link to="/contact">
                  <Button
                    className={`w-full font-semibold ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-accent justify-center"
                        : "border-primary/50 text-foreground hover:bg-primary/10 bg-transparent"
                    }`}
                    text='Get Started'
                    icon={<ArrowRight className="w-4 h-4 ml-2" />}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative section-divider px-6 bg-secondary/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold mb-3 tracking-widest">FAQ</p>
            <h2 className="heading-lg text-foreground">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Do you offer payment plans?",
                a: "Yes, we offer flexible payment options for all projects. Contact us to discuss a plan that works for your budget.",
              },
              {
                q: "What's included in support?",
                a: "Support includes bug fixes, minor updates, and consultation on best practices during the included period.",
              },
              {
                q: "Can I upgrade my plan?",
                a: "As your project grows, we can upgrade your plan and add additional features as needed.",
              },
              {
                q: "Do you offer maintenance after launch?",
                a: "Yes, we offer ongoing maintenance packages to keep your site secure, fast, and updated with the latest features.",
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

      {/* CTA Section */}
      <section className="relative section-divider px-6 py-32">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="heading-lg mb-6 text-foreground">Still have questions?</h2>
          <p className="body-text mb-6 text-foreground/80 max-w-xl mx-auto">
            Let's hop on a call and discuss the perfect solution for your project.
          </p>
          <Link to="/contact">
            <Button 
                text='Schedule Call'
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-accent"
                icon={<ArrowRight className="w-4 h-4 ml-2" />}
            />
          </Link>
        </div>
      </section>
    </div>
  )
}

import { ArrowRight, Code2, Sparkles, Brush, Building2, CircleDollarSign, SearchCheck, Code, PackageSearch, Video } from "lucide-react"
import Button from "../components/Button"
import TechSphere from "../components/TechSphere"
import ServiceCard from "../components/ServiceCard"
import TestimonialsSlider from "../components/TestimonialsSlider"
import { 
    BradGantt,
    CarlBusbyJr,
    ChrisHernandez,
    DiamondAIMediaGroup,
    JimMartenson,
    KahlilMckinnie,
    RoyIsernBand 
} from "@/assets/images";

function HomePage() {
    const testimonials = [
    {
        name: "Brad Gantt",
        designation: "Wildlife Rehabilitator",
        message: "Worked with Marc on a logo for a small private business and it came out amazing! Much thanks and I am very pleased with the results!",
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
        message: "I contacted Marc for a website for my business. He was quick to respond and very friendly. He was quick and able to make all the adjustments that I was looking for. I would definitely do business with him again and would recommend him to anyone that is looking to have a website or design created. Thanks for your help Marc!",
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
        message: "I posted looking for a graphic designer, and Marc Tecke stood out. After seeing his portfolio and chatting, I chose him for the Roy Isern Band logo. He was professional, creative, and delivered a logo I LOVE in less than 24 hours. 10/10 recommend and will use his services again!",
        image: RoyIsernBand
    },
    ]
    
    return (
        <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 glow-accent">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Next Generation Design</span>
                </div>

                <h1 className="heading-xl mb-6 text-foreground">
                    <span className="gradient-text">Designing the Future </span>Of Your Brand Identity
                </h1>

                <p className="body-text mb-10 max-w-md">We design and develop exceptional websites and logos that elevate your brand presence and help your business stand out in today’s competitive digital landscape.</p>

                <div className="flex gap-4">
                    <Button 
                        text="Get In Touch" 
                        to="/contact" 
                        icon={<ArrowRight 
                        className="w-4 h-4 ml-2" />} 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-accent"
                    />
                    <Button 
                        text="Portfolio" 
                        to="#portfolio" 
                        className="border-primary/50 text-foreground hover:bg-primary/10 bg-transparent font-semibold"
                    />
                </div>
                </div>

                <div className="relative hidden lg:flex items-center justify-center h-96">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/10 rounded-2xl blur-3xl" />
                <div className="relative">
                    {/* Geometric grid structure */}
                    <div>
                        <TechSphere />
                    </div>
                </div>

                <style>{`
                    @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                    }
                `}</style>
                </div>
            </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative section-divider px-6 border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center">
                    <p className="text-primary text-sm font-bold mb-3 tracking-widest">SERVICES</p>
                    <h2 className="heading-lg text-foreground mb-2">Our Areas of Expertise</h2>
                    <p className="body-text mb-10 text-center max-w-4xl">At Marc Tecke, we specialize in transforming ideas into visually stunning and functional designs. Our team is dedicated to delivering high-quality branding, design, and development solutions tailored to your business needs.</p>
                </div>

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
                            icon: Building2,
                            title: "Brand Identity",
                            description:
                            "Brand strategies designed to communicate your message and captivate your audience.",
                        },
                        {
                            icon: CircleDollarSign,
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
                            icon: Code,
                            title: "App Development",
                            description:
                            "We create intuitive iOS and Android apps with seamless user experiences that drive performance and align with your brand.",
                        },
                        {
                            icon: PackageSearch,
                            title: "Product Packaging Design",
                            description:
                            "We create standout packaging designs that attracts customers and reinforces your brand.",
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

        {/* Achievements / Stats Section */}
        <section className="relative section-divider px-6 py-24">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                <p className="text-primary text-sm font-bold mb-3 tracking-widest">OUR IMPACT</p>
                <h2 className="heading-lg text-foreground">Milestones We’re Proud Of</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                {[
                    { value: "250+", label: "Succesful Projects" },
                    { value: "8+", label: "Years Experience" },
                    { value: "100%", label: "Satisfaction Guarantee" },
                    { value: "24/7", label: "Consultancy" },
                ].map((item, i) => (
                    <div key={i} className="tech-card p-8 glow-hover bg-primary/10">
                    <h3 className="text-4xl font-bold text-primary mb-2">{item.value}</h3>
                    <p className="text-foreground/70 text-sm font-medium">{item.label}</p>
                    </div>
                ))}

                </div>

            </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative section-divider px-6 py-24 bg-secondary/10">
            <div className="max-w-5xl mx-auto text-center">

                <p className="text-primary text-sm font-bold mb-3 tracking-widest">TESTIMONIALS</p>
                <h2 className="heading-lg text-foreground mb-12">Trusted by Growing Brands</h2>
                <p className="body-text mb-10 text-center">We value our client relationships. Here’s their feedback on collaborating with us.</p>

                <TestimonialsSlider testimonials={testimonials} />

            </div>
        </section>

        {/* CTA Section */}
        <section className="relative section-divider px-6 py-32">
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
            <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
                <p className="text-primary text-sm font-bold mb-4 tracking-widest">READY?</p>
                <h2 className="heading-lg mb-6 text-foreground">Ready to Upgrade Your Online Presence?</h2>
                <p className="body-text mb-12 text-foreground/80 max-w-xl mx-auto text-center">Let’s work together to create creative and impactful designs that enhance your brand and help you get noticed across the digital world.</p>
                <Button 
                    text="Get Started" 
                    to="/contact" 
                    icon={<ArrowRight 
                    className="w-4 h-4 ml-2" />} 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-accent"
                />
            </div>
        </section>

    </div>
    )
}
export default HomePage
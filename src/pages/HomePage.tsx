import { ArrowRight, Code2, Sparkles, Brush, SearchCheck, PackageSearch, Video, View, Megaphone, Smartphone } from "lucide-react"
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
    RoyIsernBand,
} from "@/assets/images";
import OverlayText from "../components/OverlayText"
import CTA from "../components/CTA"

function HomePage() {
    const testimonials = [
    {
        name: "Brad Gantt",
        link: "https://www.facebook.com/BradleyGantt",
        designation: "Wildlife Rehabilitator",
        message: "Worked with Marc Tecke on a logo for a small private business and it came out amazing! Much thanks and I am very pleased with the results!",
        image: BradGantt
    },
    {
        name: "Carl Busby Jr.",
        link: "https://www.facebook.com/ARTerrariums",
        designation: "Reptiles Keeper",
        message: "Many reviews mention how patient and attentive Marc Tecke is in providing time and  services, you get no argument from me.  I will be back for additional works.",
        image: CarlBusbyJr
    },
    {
        name: "Chris Hernandez",
        link: "https://www.facebook.com/chris.hernandez.58760608",
        designation: "Customer Service Technician at AT&T",
        message: "I contacted Marc Tecke for a website for my business. He was quick to respond and very friendly. He was quick and able to make all the adjustments that I was looking for. I would definitely do business with him again and would recommend him to anyone that is looking to have a website or design created. Thanks for your help Marc Tecke!",
        image: ChrisHernandez
    },
    {
        name: "Steven Diamond",
        link: "https://www.facebook.com/stevendiamond",
        designation: "Founder Of Diamond AI Media Group",
        message: "Marc Tecke did an outstanding job on graphics for Diamond AI Media Group! Creative, professional, and patient with revisions, he nailed my vision. Highly recommend and will use his services again!",
        image: DiamondAIMediaGroup
    },
    {
        name: "Jim Martenson",
        link: "https://www.facebook.com/jamartenson",
        designation: "Leadership Coach",
        message: "Marc Tecke created my website and was always available when I needed him. They instantly responded to my requests, and custom-made my site to my exact specifications. I highly recommend their work for anyone wanting to design their website!",
        image: JimMartenson
    },
    {
        name: "Kahlil Mckinnie",
        link: "https://www.facebook.com/25kaotic",
        designation: "Gym Owner | Divine Fitness & MMA",
        message: "Working with marc tecke has been a pleasure. They designed the logo for my gym and it was exactly what i was looking for in the first try. and the quality of it was perfect.  communication was great and turn around time was amazing even with a huge time difference between us. i was on a time crunch and he got the job done.  i would definitely recommend him and he will be the only graphic designer i will use for future projects.",
        image: KahlilMckinnie
    },
    {
        name: "Roy Isern",
        link: "https://www.facebook.com/royisernguitar",
        designation: "Director Of Roy Isern Band",
        message: "I posted looking for a graphic designer, and Marc Tecke stood out. After seeing their portfolio and chatting, I chose him for the Roy Isern Band logo. He was professional, creative, and delivered a logo I LOVE in less than 24 hours. 10/10 recommend and will use their services again!",
        image: RoyIsernBand
    },
    ]
    
    return (
        <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-28 md:pt-40 pb-20 md:pb-32 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center text-center lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 md:mb-8 glow-accent text-center">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-xs md:text-sm font-medium text-primary">Digital Designs & Web Solutions Agency</span>
                            </div>

                            <h1 className="heading-xl mb-6 text-foreground leading-tight text-center lg:text-left px-4 lg:px-0">
                                <span className="gradient-text">Designing the Future </span>Of Your Brand Identity
                            </h1>

                            <p className="body-text mb-10 max-w-md text-center lg:text-left px-4 lg:px-0">
                                We design and develop exceptional websites and logos that elevate your brand presence.
                            </p>

                            <div className="flex gap-2 justify-center lg:justify-start w-full">
                                <Button text="Get In Touch" to="/contact" icon={<ArrowRight className="w-4 h-4 ml-2" />} className="bg-primary text-primary-foreground font-semibold glow-accent rounded-full " />

                                <Button text="Portfolio" to="/portfolio" className="bg-white/85 text-primary-foreground font-semibold glow-accent rounded-full px-5" />
                            </div>
                        </div>

                        <div className="relative hidden lg:flex items-center justify-center h-72 md:h-96">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/10 rounded-2xl blur-3xl" />
                            <div className="relative">
                                <TechSphere />
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative section-divider px-4 md:px-6 border-t border-border">
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
                <div className="max-w-7xl mx-auto">

                    <div className="flex flex-col items-center text-center px-2">
                        <OverlayText text="Services" />
                        <h2 className="heading-lg text-foreground mb-2">Our Areas of Expertise</h2>
                        <p className="body-text mb-10 max-w-3xl">We specialize in transforming ideas into visually stunning and functional designs.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

        {/* Achievements / Stats Section */}
        <section className="relative section-divider px-4 md:px-6 py-20 md:py-24">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
            <div className="max-w-6xl mx-auto text-center">

                <OverlayText text="Our Impact" />
                <h2 className="heading-lg text-foreground mb-14">Milestones We’re Proud Of</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10">
                    {[
                        { value: "250+", label: "Succesful Projects" },
                        { value: "8+", label: "Years Experience" },
                        { value: "100%", label: "Satisfaction Guarantee" },
                        { value: "24/7", label: "Consultancy" },
                    ].map((item, i) => (
                        <div key={i} className="tech-card p-8 glow-hover">
                            <h3 className="text-4xl font-bold text-primary mb-2">{item.value}</h3>
                            <p className="text-foreground/70 text-sm font-medium">{item.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative section-divider px-6 py-24 bg-secondary/10">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
            <div className="max-w-5xl mx-auto text-center">

                <OverlayText text="Testimonials" />
                <h2 className="heading-lg text-foreground mb-12">Trusted by Growing Brands</h2>
                <p className="body-text mb-10 text-center">We value our client relationships. Here’s their feedback on collaborating with us.</p>

                <TestimonialsSlider testimonials={testimonials} />

            </div>
        </section>

        <CTA
            overlayText="Ready?"
            heading="Ready to Upgrade Your Online Presence?"
            description="Let’s work together to create impactful designs."
            button={<Button text="Get Started" to="/contact" icon={<ArrowRight className="w-4 h-4 ml-2" />} className="bg-primary text-primary-foreground font-semibold glow-accent rounded-full" />}    
        />

        </div>
    )
}
export default HomePage
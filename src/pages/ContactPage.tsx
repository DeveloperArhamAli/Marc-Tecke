import { FacebookIcon, InstagramIcon, Linkedin, Mail, TwitterIcon } from "lucide-react"
import ContactForm from "../components/ContactForm"
import OverlayText from "../components/OverlayText"
import { RiWhatsappLine } from "@remixicon/react"

function ContactPage() {
    return (
        <section id="contact" className="relative section-divider px-6 border-t border-border">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <OverlayText text="Get In Touch" />
                    <h2 className="heading-lg text-foreground">Contact Us</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    <div className="tech-card p-8 bg-primary/10">
                        <h3 className="text-lg font-bold text-foreground mb-8">Contact Information</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-foreground/60 text-xs font-bold tracking-widest mb-2">EMAIL</p>
                                <a
                                    href="mailto: marctecke@gmail.com"
                                    className="text-primary font-semibold flex items-center gap-1"
                                >
                                    <Mail className="h-5 w-5" />
                                    marctecke@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-foreground/60 text-xs font-bold tracking-widest mb-2">WhatsApp</p>
                                <a href="https://wa.me/33744999389" className="text-primary font-semibold flex items-center gap-1">
                                    <RiWhatsappLine className="w-5 h-5" />
                                    +33 7 44 99 93 89
                                </a>
                            </div>
                            <div>
                                <p className="text-foreground/60 text-xs font-bold tracking-widest mb-3">FOLLOW</p>
                                <div className="flex gap-4">
                                    {[
                                        {
                                            name: "Twitter",
                                            link: "https://x.com/marctecke",
                                            icon: TwitterIcon
                                        },
                                        {
                                            name: "Facebook",
                                            link: "https://facebook.com/marctecke",
                                            icon: FacebookIcon
                                        },
                                        {
                                            name: "Instagram",
                                            link: "https://instagram.com/marc.tecke",
                                            icon: InstagramIcon
                                        },
                                        {
                                            name: "LinkedIn",
                                            link: "https://linkedin.com/marctecke",
                                            icon: Linkedin
                                        },
                                    ].map((social) => (
                                        <a
                                            key={social.link}
                                            href={social.link}
                                            className="text-foreground/50 hover:text-primary transition-colors text-sm font-medium flex items-center"
                                        >
                                            <social.icon className="inline-block w-4 h-4 mr-1" />
                                            {social.name}
                                    </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactForm />

                </div>

            </div>
        </section>
    )
}
export default ContactPage
import { Facebook, Instagram, Mail } from "lucide-react"
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
                                <p className="text-foreground/60 text-xs font-bold tracking-widest mb-2">Facebook</p>
                                <a href="https://facebook.com/marctecke" className="text-primary font-semibold flex items-center gap-1">
                                    <Facebook className="w-5 h-5" />
                                    Marc Tecke
                                </a>
                            </div>
                            <div>
                                <p className="text-foreground/60 text-xs font-bold tracking-widest mb-2">Instagram</p>
                                <a href="https://instagram.com/marc.tecke" className="text-primary font-semibold flex items-center gap-1">
                                    <Instagram className="w-5 h-5" />
                                    marc.tecke
                                </a>
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
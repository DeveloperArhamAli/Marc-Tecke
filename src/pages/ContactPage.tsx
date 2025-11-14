import ContactForm from "../components/ContactForm"

function ContactPage() {
    return (
        <section id="contact" className="relative section-divider px-6 border-t border-border">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-primary text-sm font-bold mb-3 tracking-widest">GET IN TOUCH</p>
                    <h2 className="heading-lg text-foreground">Let's Connect</h2>
                </div>

                <ContactForm />

            </div>
        </section>
    )
}
export default ContactPage
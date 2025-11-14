import Button from "./Button"

function ContactForm() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="tech-card p-8">
                <h3 className="text-lg font-bold text-foreground mb-8">Contact Information</h3>
                <div className="space-y-6">
                    <div>
                    <p className="text-foreground/60 text-xs font-bold tracking-widest mb-2">EMAIL</p>
                    <a
                        href="mailto: marctecke@gmail.com"
                        className="text-primary hover:text-accent font-semibold transition-colors"
                    >
                        marctecke@gmail.com
                    </a>
                    </div>
                    <div>
                    <p className="text-foreground/60 text-xs font-bold tracking-widest mb-2">PHONE</p>
                    <a href="https://wa.me/33744999389" className="text-primary hover:text-accent font-semibold transition-colors">
                        +33 7 44 99 93 89
                    </a>
                    </div>
                    <div>
                    <p className="text-foreground/60 text-xs font-bold tracking-widest mb-3">FOLLOW</p>
                    <div className="flex gap-4">
                        {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                        <a
                            key={social}
                            href="#"
                            className="text-foreground/50 hover:text-primary transition-colors text-sm font-medium"
                        >
                            {social}
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
            </div>

            <form className="tech-card p-8 space-y-4">
                <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-primary/5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-primary/5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <textarea
                    placeholder="Your message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-primary/5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
                <Button 
                    text="Send Message"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-accent flex cursor-pointer justify-center"
                />
            </form>
        </div>
    )
}
export default ContactForm
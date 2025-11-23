import OverlayText from "./OverlayText"

interface CTAProps {
    overlayText: string;
    heading: string;
    description: string;
    button: React.ReactNode;
}

function CTA({
    overlayText,
    heading,
    description,
    button
}: CTAProps) {
    return (
        <section className="relative section-divider px-4 md:px-6 py-18 md:py-32 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-50" />
            <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center border border-white/10 py-10 px-5 rounded-lg glow-hover">

                <OverlayText text={overlayText} />
                <h2 className="heading-lg mb-6 text-foreground text-wrap">{heading}</h2>
                <p className="body-text mb-6 text-foreground/80 max-w-xl mx-auto">{description}</p>

                {button}
            </div>
    </section>
    )
}
export default CTA
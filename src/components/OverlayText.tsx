function OverlayText({ text }: { text: string }) {
    return (
        <p className="text-white text-sm mb-3 tracking-wide border border-white/50 py-1 px-2 rounded-full inline-block bg-linear-to-r from-primary/60 to-accent/60">{text}</p>
    )
}
export default OverlayText
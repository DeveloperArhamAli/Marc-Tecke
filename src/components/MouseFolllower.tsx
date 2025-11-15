import { useEffect, useRef } from "react"

export function MouseFollower() {
    const followerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (followerRef.current) {
                followerRef.current.style.left = `${e.clientX}px`
                followerRef.current.style.top = `${e.clientY}px`
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div
            ref={followerRef}
            className="fixed pointer-events-none z-20 w-80 h-80 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
            style={{
                background: "radial-gradient(circle, rgba(102, 204, 255, 0.5) 0%, transparent 80%)",
                filter: "blur(40px)",
                transition: "left 0.1s ease-out, top 0.1s ease-out",
            }}
        />
    )
}

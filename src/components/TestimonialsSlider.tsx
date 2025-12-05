import { useState, useEffect, useCallback } from "react"
import { AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialCard from "./TestimonialCard"

interface Testimonial {
    keyProp?: number;
    message: string;
    name: string;
    designation: string;
    image: string;
    link: string;
}

function TestimonialSlider({ testimonials, autoSlideInterval = 5000 }: { testimonials: Testimonial[]; autoSlideInterval?: number }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, [testimonials.length])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }, [testimonials.length])

    useEffect(() => {
        let intervalId: number | undefined

        if (isAutoPlaying) {
        intervalId = setInterval(() => {
            nextSlide()
        }, autoSlideInterval)
        }

        return () => {
        if (intervalId) clearInterval(intervalId)
        }
    }, [isAutoPlaying, nextSlide, autoSlideInterval])

    const handleMouseEnter = () => setIsAutoPlaying(false)
    const handleMouseLeave = () => setIsAutoPlaying(true)

    return (
        <div className="relative w-full max-w-3xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                <TestimonialCard {...testimonials[currentIndex]} keyProp={currentIndex} />
                </AnimatePresence>
            </div>

            <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`size-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                        ? "bg-linear-to-r from-primary to-accent shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                        : "bg-white/20"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 -translate-y-1/2 size-10 rounded-full bg-primary/5 cursor-pointer backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 z-10"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="size-5 text-white/70" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 -translate-y-1/2 size-10 rounded-full bg-primary/5 cursor-pointer backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 z-10"
                aria-label="Next testimonial"
            >
                <ChevronRight className="size-5 text-white/70" />
            </button>
        </div>
    )
}

export default TestimonialSlider
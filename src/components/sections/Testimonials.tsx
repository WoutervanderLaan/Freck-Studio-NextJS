'use client'

import { animate, motion, useMotionValue } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Testimonial from '../Testimonial'
import TestimonialItems from '../TestimonialItems'

const GAP = 40

const Testimonials = () => {
    const testimonials = TestimonialItems()
    const containerRef = useRef<HTMLDivElement>(null)

    const [testimonialWidth, setTestimonialWidth] = useState(0)
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(3)
    const [endIndex, setEndIndex] = useState(0)

    const calculateDimensions = (value: number) => {
        setTestimonialsPerPage(value < 768 ? 1 : value < 1024 ? 2 : 3)
        setEndIndex(2)
    }

    useEffect(() => {
        if (containerRef.current)
            setTestimonialWidth(
                containerRef.current?.getBoundingClientRect().width /
                    testimonialsPerPage -
                    GAP
            )
    }, [testimonialsPerPage])

    useEffect(() => {
        if (containerRef.current) calculateDimensions(window.innerWidth)
    }, [containerRef.current])

    useEffect(() => {
        window.addEventListener('resize', () =>
            calculateDimensions(window.innerWidth)
        )

        return () =>
            window.removeEventListener('resize', () =>
                calculateDimensions(window.innerWidth)
            )
    }, [])

    const x = useMotionValue(0)

    return (
        <section className="w-full flex flex-col gap-4">
            <div ref={containerRef} className="container h-fit overflow-hidden">
                <motion.div
                    className="w-max h-[500px] relative flex flex-row gap-10"
                    style={{
                        x,
                    }}
                    drag="x"
                    dragConstraints={{
                        left:
                            -testimonialWidth *
                                (testimonials.length - testimonialsPerPage) -
                            GAP * (testimonials.length - testimonialsPerPage),
                        right: 0,
                    }}
                >
                    {containerRef.current &&
                        testimonials.map((testimonial, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-full flex-1"
                                    style={{
                                        width: testimonialWidth,
                                    }}
                                >
                                    <Testimonial key={index} {...testimonial} />
                                </div>
                            )
                        })}
                </motion.div>
            </div>
            <div className="flex flex-row gap-2 mb-8 self-center">
                {testimonials.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-2 rounded-full backdrop-invert"
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        onClick={() =>
                            animate(x, index * -testimonialWidth - index * GAP)
                        }
                    />
                ))}
            </div>
        </section>
    )
}

export default Testimonials

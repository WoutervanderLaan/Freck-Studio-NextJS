'use client'

import { motion, useMotionValue, animate, wrap } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Testimonial from '../Testimonial'
import TestimonialItems from '../TestimonialItems'

const GAP = 40

const Testimonials = () => {
    const testimonials = TestimonialItems()
    const containerRef = useRef<HTMLDivElement>(null)

    const [containerWidth, setContainerWidth] = useState(0)
    const [testimonialWidth, setTestimonialWidth] = useState(0)
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(0)
    const [snap, setSnap] = useState(false)

    const calculateDimensions = (windowWidth: number) => {
        if (containerRef.current) {
            setTestimonialsPerPage(
                windowWidth < 768 ? 1 : windowWidth < 1280 ? 2 : 3
            )

            setContainerWidth(
                containerRef.current?.getBoundingClientRect().width -
                    (windowWidth < 768 ? 0 : 40)
            )
        }
    }

    useEffect(() => {
        setTestimonialWidth(containerWidth / testimonialsPerPage - GAP)
    }, [containerWidth, testimonialsPerPage])

    useEffect(() => {
        calculateDimensions(window.innerWidth)
    }, [containerRef.current])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSnap(true)
            animate(x, 0)
            calculateDimensions(window.innerWidth)
        })

        return () =>
            window.removeEventListener('resize', () => {
                setSnap(true)
                animate(x, 0)
                calculateDimensions(window.innerWidth)
            })
    }, [])

    const x = useMotionValue(0)

    const left =
        -testimonialWidth * (testimonials.length - testimonialsPerPage) -
        GAP * (testimonials.length - testimonialsPerPage)

    return (
        <section className="w-full flex flex-col gap-4">
            <div ref={containerRef} className="container h-fit overflow-hidden">
                <motion.div
                    className="w-max h-fit relative flex flex-row gap-10"
                    drag={snap ? false : 'x'}
                    dragConstraints={{
                        left,
                        right: 0,
                    }}
                    style={{
                        x,
                    }}
                >
                    {containerRef.current &&
                        testimonials.map((testimonial, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-fit flex-1"
                                    style={{
                                        width: testimonialWidth || 100,
                                    }}
                                >
                                    <Testimonial key={index} {...testimonial} />
                                </div>
                            )
                        })}
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials

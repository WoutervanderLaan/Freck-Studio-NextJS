'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Testimonial from '../Testimonial'
import TestimonialItems from '../TestimonialItems'
import Button from '../Button'
import Moon from '../icons/Moon'
import Sun from '../icons/Sun'

const GAP = 40

const Testimonials = () => {
    const testimonials = TestimonialItems()
    const containerRef = useRef<HTMLDivElement>(null)

    const [startValue, setStartValue] = useState(0)
    const [testimonialWidth, setTestimonialWidth] = useState(0)
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(3)
    const [endingIndex, setEndingIndex] = useState(testimonials.length - 1)

    const calculateDimensions = (value: number) => {
        setTestimonialsPerPage(value < 768 ? 1 : value < 1024 ? 2 : 3)
        setEndingIndex(
            value < 768
                ? testimonials.length - 1
                : value < 1024
                ? testimonials.length - 2
                : testimonials.length - 3
        )
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

    return (
        <section className="w-full">
            <div
                ref={containerRef}
                className="container relative flex flex-col items-center justify-end h-[500px] overflow-x-hidden"
            >
                {containerRef.current &&
                    testimonials.map((testimonial, index) => {
                        return (
                            <motion.div
                                key={index}
                                transition={{
                                    type: 'tween',
                                    duration: 0.2,
                                }}
                                className="absolute h-[500px]"
                                style={{
                                    height: '100%',
                                    width: testimonialWidth,
                                    left: 0 + GAP / 2,
                                }}
                                animate={{
                                    x:
                                        (testimonialWidth + GAP) * index -
                                        startValue * (testimonialWidth + GAP),
                                }}
                            >
                                <Testimonial key={index} {...testimonial} />
                            </motion.div>
                        )
                    })}
                <Button
                    variant="ghost"
                    className="absolute left-10 top-[50%] bg-white/50 -translate-y-6 hover:bg-white/75"
                    onPress={() =>
                        setStartValue((prevValue) => {
                            return prevValue === 0 ? endingIndex : prevValue - 1
                        })
                    }
                    icon={<Moon />}
                />
                <Button
                    variant="ghost"
                    className="absolute right-10 top-[50%] bg-white/50 -translate-y-6 hover:bg-white/75"
                    onPress={() =>
                        setStartValue((prevValue) => {
                            return prevValue === endingIndex ? 0 : prevValue + 1
                        })
                    }
                    icon={<Sun />}
                />
                <div className="flex flex-row gap-2 mb-8">
                    {testimonials.map((_, index) => (
                        <motion.div
                            key={index}
                            className="w-2 h-2 rounded-full backdrop-invert"
                            animate={{
                                opacity: index === startValue ? 1 : 0.5,
                                scale: index === startValue ? 1.3 : 1,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials

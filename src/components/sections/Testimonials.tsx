'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Testimonial from '../Testimonial'
import TestimonialItems from '../TestimonialItems'

const Testimonials = () => {
    const testimonials = TestimonialItems()
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(0)

    const calculateDimensions = (windowWidth: number) => {
        setTestimonialsPerPage(
            windowWidth < 768 ? 1 : windowWidth < 1280 ? 2 : 3
        )
    }

    useEffect(() => {
        calculateDimensions(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', () => {
            calculateDimensions(window.innerWidth)
        })

        return () =>
            window.removeEventListener('resize', () => {
                calculateDimensions(window.innerWidth)
            })
    }, [])

    return (
        <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full flex flex-col gap-4"
        >
            <div className="text-center flex flex-col gap-6 max-w-[640px] self-center my-4 md:my-10">
                <h3 className="font-serif text-lg-variant md:text-xl">
                    You are too polite people!
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam.
                </p>
            </div>
            <div className="container h-fit overflow-hidden">
                <Swiper spaceBetween={20} slidesPerView={testimonialsPerPage}>
                    {testimonials.map((testimonial, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Testimonial key={index} {...testimonial} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </motion.section>
    )
}

export default Testimonials

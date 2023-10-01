'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState, useEffect } from 'react'
import Testimonial from '../Testimonial'
import TestimonialItems from '../TestimonialItems'

const GAP = 39

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
        <section className="w-full flex flex-col gap-4">
            <div className="container h-fit overflow-hidden">
                <Swiper spaceBetween={50} slidesPerView={testimonialsPerPage}>
                    {testimonials.map((testimonial, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Testimonial key={index} {...testimonial} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials

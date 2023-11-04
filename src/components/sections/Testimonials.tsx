'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { motion } from 'framer-motion'
import Testimonial from '../Testimonial'
import TestimonialItems from '../TestimonialItems'

const Testimonials = () => {
    const testimonials = TestimonialItems()

    return (
        <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="container flex flex-col gap-4"
        >
            <div className="text-center flex flex-col gap-6 max-w-[80%] md:max-w-[642px] self-center my-4 md:my-10">
                <h3 className="font-serif font-medium text-lg-variant md:text-2xl">
                    Wow, you guys are just too polite!
                </h3>
                <p className="text-base-v2">
                    My clients are like the finest connoisseurs of awesomeness.
                    Let&apos;s venture into the chest of their glowing reviews:
                </p>
            </div>
            <div className="h-fit overflow-hidden">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <Testimonial {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    )
}

export default Testimonials

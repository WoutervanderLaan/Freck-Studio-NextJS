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
            <div className="text-center flex flex-col gap-6 max-w-[80%] md:max-w-[640px] self-center my-4 md:my-10">
                <h3 className="font-serif font-medium text-lg-variant md:text-2xl">
                    You are too polite people!
                </h3>
                <p className="text-base-variant">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam.
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
                    {testimonials.map((testimonial, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Testimonial {...testimonial} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </motion.section>
    )
}

export default Testimonials

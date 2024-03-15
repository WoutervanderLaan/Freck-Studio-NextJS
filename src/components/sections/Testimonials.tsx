'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Testimonial from '../Testimonial'
import { MotionSection } from '../MotionElement'
import kristina from '@/../public/img/Kristina.png'
import silvija from '@/../public/img/Silvija.png'
import monika from '@/../public/img/Monika.png'
import milda from '@/../public/img/Milda.png'
import ciri from '@/../public/img/Ciri.png'

const TESTIMONIALS = [
    {
        backgroundColor: 'bg-gray-light',
        textColor: 'text-blue-intense',
        name: 'Kristina Kirkliauskaitė',
        position: 'Communications Manager',
        company: 'Baltic Amadeus',
        image: kristina,
        text: "I've worked with Šarūnė on multiple design projects, and she always comes up with something fresh and creative. Šarūnė also has a strong collaborative quality, which makes teamwork smooth and fun. Beyond that, Šarūnė is a very skilled digital designer, so you can be sure that projects are always delivered in high quality and on time.",
    },
    {
        backgroundColor: 'bg-green-light',
        textColor: 'text-purple-alt',
        name: 'Milda Bernatavičiūtė',
        position: 'Product Marketing Manager',
        company: 'Omnisend',
        image: milda,
        text: "I had the pleasure of working closely with Šarūnė. I was always impressed by her dedication to quality and attention to detail. She delivers polished results, and her genuine care for her work makes her an incredibly trustworthy partner. If you're looking for a talented designer who will go above and beyond to exceed your expectations, Šarūnė is the perfect choice.",
    },
    {
        name: 'Monika Krikščiūnaitė',
        position: 'Marketing Consultant',
        company: 'TBWA\\Vilnius',
        image: monika,
        text: "I highly recommend Šarūnė as a an excellent creative. I've collaborated with her for over 5 years on various projects. I am deeply impressed by her ability not only to creatively execute design tasks but also to thoroughly comprehend the job brief. She possesses a sense of aesthetics, understands emerging trends, and quickly grasps a new brand identity.",
    },
    {
        backgroundColor: 'bg-gray-light',
        textColor: 'text-blue-intense',
        name: 'Silvija Kuprionytė',
        position: 'Account Manager',
        company: 'INK agency',
        image: silvija,
        text: "Šarūnė is unequivocally a specialist in her field. She has an excellent aesthetic sense, her works are creative and original, and most importantly, Šarūnė is not just an executor. She has a clear vision of what to do to exceed the client's expectations visually and she is not afraid to express her opinion, which may not necessarily align with the client's",
    },
    {
        backgroundColor: 'bg-green-light',
        textColor: 'text-purple-alt',
        name: 'Ciri',
        position: 'Vibe Manager',
        company: 'Meowcrosoft',
        image: ciri,
        text: "Meow! I've had the honor of closely observing my human, Šarūnė, in her creative domain. Her dedication to quality and eye for detail never cease to amaze me. Every stroke of her digital paw and design finesse results in purr-fectly polished designs. If you're on the prowl for a designer who'll leave no yarn ball unturned, look no further than Šarūnė.",
    },
]

const Testimonials = () => (
    <MotionSection
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="container flex flex-col gap-4"
    >
        <div className="text-center flex flex-col gap-6 max-w-[85%] md:max-w-[642px] self-center mb-5 md:mt-10">
            <h3 className="font-serif font-medium text-lg-variant md:text-2xl">
                Wow, you guys are just too polite!
            </h3>
            <p className="text-base-variant md:text-base-v2">
                My clients are like the finest connoisseurs of awesomeness.
                Let&apos;s venture into the chest of their glowing reviews:
            </p>
        </div>
        <div className="h-fit flex">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={true}
                modules={[Pagination]}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1280: {
                        slidesPerView: 3,
                    },
                }}
            >
                {TESTIMONIALS.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Testimonial {...testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </MotionSection>
)

export default Testimonials

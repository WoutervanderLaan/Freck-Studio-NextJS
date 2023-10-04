'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import monkeyImg from '../../../public/img/monkey7.png'
import Card from '../Card'
import Tag from '../Tag'

const designServices = [
    '3D assets',
    'Branding',
    'illustrations',
    // 'UX/UI',
    'Icons',
    'Motion',
    'Visual Design',
    'Web Development',
    'Social Media',
    'UI Kits',
]

const WhyFreck = () => (
    <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        id="why"
        className="container flex flex-col gap-5 scroll-my-20 lg:flex-row lg:h-[725px]"
    >
        <Card
            backgroundColor="bg-pink dark:bg-dark-tertiary-bg"
            className="w-full h-full text-green flex flex-col py-[50px] gap-5"
        >
            <div className="relative bg-pink-dark w-[60%] aspect-square rounded-full overflow-hidden">
                <Image
                    src={monkeyImg}
                    className="scale-[1.3] translate-y-5 aspect-square"
                    alt="image of monkey holding a heart"
                    placeholder="blur"
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                />
            </div>
            <div className="text-center flex flex-col justify-between h-fit px-2 gap-5 max-w-[460px]">
                <h3 className="text-lg font-medium font-serif lg:text-2xl">
                    My design purpose <br /> Love and Care
                </h3>
                <p className="text-base-variant">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Card>

        <Card
            backgroundColor="bg-black dark:bg-dark-primary-bg"
            className="w-full h-full text-white flex flex-col gap-10 lg:gap-20 lg:px-[60px] lg:py-[50px]"
        >
            <div className="text-center flex flex-col gap-5">
                <h3 className="text-lg font-medium font-serif lg:text-2xl">
                    Hey I just met you and I can help you
                </h3>
                <p className="text-base-variant opacity-75">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt.
                </p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 justify-center">
                {designServices.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </div>
        </Card>
    </motion.section>
)

export default WhyFreck

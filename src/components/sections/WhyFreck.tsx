'use client'

import { motion } from 'framer-motion'
import Card from '../Card'
import Tag from '../Tag'

const designServices = [
    '3D assets',
    'Branding',
    'illustrations',
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
        className="container flex flex-col gap-5 scroll-my-20 lg:flex-row lg:min-h-[730px]"
    >
        <Card
            backgroundColor="bg-pink dark:bg-dark-tertiary-bg"
            className="w-full h-full lg:min-h-[730px] text-green flex flex-col py-[50px] gap-5"
        >
            <div className="relative w-[60%] aspect-square rounded-full overflow-hidden">
                <video
                    muted
                    loop
                    autoPlay
                    preload="metadata"
                    playsInline
                    src="/img/Monkey_Freck_1.mp4"
                    className="scale-[1.3] translate-y-10 translate-x-[-5px]"
                >
                    Your browser does not support the video tag.
                    <track
                        kind="captions"
                        content="Monkey holding a glowing heart"
                    />
                </video>
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
            className="w-full h-full lg:min-h-[730px] text-white flex flex-col gap-10 lg:gap-20 lg:px-[60px] lg:py-[50px]"
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

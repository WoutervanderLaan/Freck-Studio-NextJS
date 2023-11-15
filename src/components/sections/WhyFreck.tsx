'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from '../Card'
import hands from '@/../public/img/Freck_Hands.png'

const WhyFreck = () => (
    <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        id="why"
        className="container flex flex-col gap-5 scroll-my-20 lg:flex-row xl:h-[920px] items-stretch"
    >
        <Card
            backgroundColor="bg-pink dark:bg-dark-tertiary-bg"
            className="w-full text-green flex flex-col flex-1 gap-8 justify-between pt-10 pb-16 lg:pt-16 lg:pb-24"
            padding={false}
        >
            <div className="relative aspect-square rounded-full overflow-hidden z-10 w-[80%] md:w-[70%] lg:w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]">
                <video
                    muted
                    loop
                    autoPlay
                    preload="auto"
                    playsInline
                    className="scale-[1.3] translate-y-[10%] translate-x-[-5px] z-0 rounded-full"
                >
                    <source src="/img/Monkey-smalll.webm" type="video/webm" />
                    <source src="/img/Monkey.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    <track
                        kind="captions"
                        content="Monkey holding a glowing heart"
                    />
                </video>
            </div>
            <div className="text-center flex flex-col justify-between h-fit gap-5 md:gap-8 lg:gap-6 px-6 md:px-14 xl:px-12 2xl:px-[90px]">
                <h3 className="text-lg-variant font-medium font-serif md:text-xl lg:text-lg-variant xl:text-2xl">
                    Heartfelt designer
                </h3>
                <p className="text-base-variant md:text-base-v2 xl:max-w-[460px]">
                    I aim to challenge traditional frameworks while
                    collaborating closely with my clients. My duty is to stay
                    engaged, give a damn, and build authentic relationships
                    together. <br /> <br /> Empathy is the only way forward!
                </p>
            </div>
        </Card>

        <Card
            backgroundColor="bg-black dark:bg-dark-primary-bg"
            className="w-full text-white flex flex-col justify-between flex-1 overflow-hidden pt-16 pb-4 lg:pb-16"
            padding={false}
        >
            <div className="text-center items-center flex flex-col gap-5 md:gap-8 lg:gap-6 px-6 md:px-14 xl:px-12 2xl:px-[90px]">
                <h3 className="text-lg-variant font-medium font-serif md:text-xl lg:text-lg-variant xl:text-2xl">
                    In search of stardom and extravaganza?
                </h3>
                <p className="text-base-variant md:text-base-v2 opacity-60 xl:max-w-[460px]">
                    Are you looking for eye-catching infographics, captivating
                    illustrations, or concise one-pagers to convey your
                    brand&apos;s message? Perhaps you&apos;re contemplating a
                    company rebrand?
                    <br />
                    <br />
                    You won&apos;t need Photoshop or any other complex software
                    tools—just a Slack thread with me.
                </p>
            </div>
            <div className="relative w-full aspect-hands -mt-4 lg:mt-0">
                <Image
                    src={hands}
                    alt="Image of hands exchanging a like card"
                    fill
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="aspect-hands object-cover scale-110 sm:scale-100"
                />
            </div>
        </Card>
    </motion.section>
)

export default WhyFreck

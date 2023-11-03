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
        className="container flex flex-col gap-5 scroll-my-20 lg:flex-row xl:h-[880px] items-stretch"
    >
        <Card
            backgroundColor="bg-pink dark:bg-dark-tertiary-bg"
            className="w-full text-green flex flex-col flex-1 gap-5 justify-evenly"
            padding={false}
        >
            <div className="relative aspect-square rounded-full overflow-hidden z-10 w-[80%] md:w-[70%] lg:-mt-10">
                <video
                    muted
                    loop
                    autoPlay
                    preload="metadata"
                    playsInline
                    src="/img/Monkey.mp4"
                    className="scale-[1.3] translate-y-[10%] translate-x-[-5px] z-0 rounded-full"
                >
                    Your browser does not support the video tag.
                    <track
                        kind="captions"
                        content="Monkey holding a glowing heart"
                    />
                </video>
            </div>
            <div className="text-center flex flex-col justify-between h-fit gap-5 md:gap-8 lg:gap-5 px-8 md:px-14 lg:-mb-10">
                <h3 className="text-lg-variant font-medium font-serif md:text-xl lg:text-lg-variant xl:text-2xl">
                    Emotional designer
                </h3>
                <p className="md:text-base-variant">
                    I try to conquer the digital world through real emotional
                    engagement. I seek to challenge conservative frameworks
                    while collaborating with my clients. My responsibility is to
                    stay engaged, give a damn, and build meaningful
                    relationships together. <br /> <br /> Empathy is the only
                    way forward!
                </p>
            </div>
        </Card>

        <Card
            backgroundColor="bg-black dark:bg-dark-primary-bg"
            className="w-full text-white flex flex-col justify-evenly flex-1 overflow-hidden"
            padding={false}
        >
            <div className="text-center flex flex-col gap-5 md:gap-8 lg:gap-5 px-8 md:px-14">
                <h3 className="text-lg-variant font-medium font-serif md:text-xl lg:text-lg-variant xl:text-2xl">
                    In search of stardom and extravaganza?
                </h3>
                <p className="md:text-base-variant opacity-75">
                    Are you tired of boringly designed Power Point
                    presentations? Are you in need of infographics,
                    illustrations or one pagers to explain your brand? Or are
                    you thinking of rebranding your company?
                    <br />
                    <br />
                    You wont need Photoshop or any other fancy softwares, just a
                    Slack thread with me.
                </p>
            </div>
            <div className="relative w-full aspect-[16/11]">
                <Image
                    src={hands}
                    alt="Image of hands exchanging a like card"
                    fill
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="aspect-[16/11]"
                />
            </div>
        </Card>
    </motion.section>
)

export default WhyFreck

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
            className="w-full text-green flex flex-col flex-1 py-12 gap-5 justify-evenly"
            padding={false}
        >
            <div className="relative aspect-square rounded-full overflow-hidden z-10 w-[80%] md:w-[70%]">
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
            <div className="text-center flex flex-col justify-between h-fit gap-5 md:gap-8 lg:gap-5 px-8 md:px-14">
                <h3 className="text-lg-variant font-medium font-serif md:text-xl lg:text-lg-variant xl:text-2xl">
                    (Too) emotional designer
                </h3>
                <p className="md:text-base-variant">
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
            className="w-full text-white flex flex-col justify-evenly flex-1 overflow-hidden"
            padding={false}
        >
            <div className="text-center flex flex-col gap-5 md:gap-8 lg:gap-5 px-8 md:px-14">
                <h3 className="text-lg-variant font-medium font-serif md:text-xl lg:text-lg-variant xl:text-2xl">
                    Skills to skyrocket your marketing
                </h3>
                <p className="md:text-base-variant opacity-75">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
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

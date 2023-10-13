'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from '../Card'
import phone from '@/../public/img/phone3D.png'

const WhyFreck = () => (
    <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        id="why"
        className="container flex flex-col gap-5 scroll-my-20 lg:flex-row xl:h-[820px]"
    >
        <Card
            backgroundColor="bg-pink dark:bg-dark-tertiary-bg"
            className="w-full h-full text-green flex flex-col flex-1 py-12 gap-5 lg:min-h-[730px]"
        >
            <div className="relative aspect-square rounded-full overflow-hidden z-10 min-[500px]:w-[80%] md:w-[60%]">
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
            <div className="text-center flex flex-col justify-between h-fit px-2 gap-5 max-w-[460px]">
                <h3 className="text-lg font-medium font-serif lg:text-2xl">
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
            className="w-full h-full text-white flex flex-col justify-between flex-1 px-0 xl:px-10 lg:py-12 lg:min-h-[730px]"
        >
            <div className="text-center flex flex-col gap-5 px-10">
                <h3 className="text-lg font-medium font-serif lg:text-lg-variant xl:text-2xl">
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
            <div className="relative aspect-square w-[60%]">
                <Image
                    src={phone}
                    alt="Image of phone with incoming call"
                    fill
                    className="aspect-square"
                />
            </div>
        </Card>
    </motion.section>
)

export default WhyFreck

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Card from '../Card'
import deskImage from '../../../public/img/Desk2.png'
import TextBalloons from '../TextBalloons'

const WhoCard = () => (
    <motion.section
        id="about"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="container scroll-my-20"
    >
        <Card
            backgroundColor="bg-dark-secondary-bg"
            className="relative text-center"
        >
            <h2 className="text-blue font-serif font-medium text-2xl lg:text-3xl">
                Everyone is an artist
            </h2>
            <p className="text-blue text-center text-base mt-5 md:max-w-[70%] lg:max-w-[50%] lg:text-base-variant">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="relative bottom-[-50px] w-full aspect-desk mt-[-30px] md:mt-[-50px] lg:mt-[-90px]">
                <Image
                    loading="lazy"
                    quality={100}
                    src={deskImage}
                    fill
                    sizes="80vw"
                    alt="Image of work table containing several personal and work related items"
                />
                <TextBalloons />
            </div>
        </Card>
    </motion.section>
)

export default WhoCard

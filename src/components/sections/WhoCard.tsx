'use client'

import { motion } from 'framer-motion'
import Card from '../Card'
import TextBalloons from '../TextBalloons'
import UseViewportDetection from '@/hooks/useViewportDetection'

const WhoCard = () => {
    const isTablet = UseViewportDetection(768)

    return (
        <motion.section
            id="about"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="container scroll-my-20"
        >
            <Card
                backgroundColor="bg-dark-secondary-bg"
                className="relative text-center overflow-hidden"
            >
                <h2 className="text-blue font-serif font-medium text-xl md:text-2xl lg:text-3xl">
                    Everyone is an artist
                </h2>
                <p className="text-blue text-center text-base mt-5 z-10 md:max-w-[70%] lg:max-w-[50%] lg:text-base-variant">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="relative bottom-[-50px] w-full aspect-desk mt-[-30px] md:mt-[-50px] lg:mt-[-90px] 2xl:bottom-[-90px]">
                    <video muted loop autoPlay preload="auto" playsInline>
                        <source
                            src="/img/Desk_Safari.mov"
                            type="video/quicktime"
                        />
                        <source src="/img/Desk_Chrome.webm" type="video/webm" />
                        Your browser does not support the video tag.
                        <track
                            kind="captions"
                            content="Desk with various personal items"
                        />
                    </video>
                    {isTablet === false && <TextBalloons />}
                </div>
            </Card>
        </motion.section>
    )
}

export default WhoCard

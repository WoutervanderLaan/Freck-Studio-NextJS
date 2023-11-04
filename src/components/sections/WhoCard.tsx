'use client'

import { motion } from 'framer-motion'
import Card from '../Card'
import TextBalloons from '../TextBalloons'
import UseViewportDetection from '@/hooks/useViewportDetection'
import AriaLink from '../AriaLink'

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
                <h2 className="text-blue font-serif font-medium text-lg-variant md:text-xl lg:text-3xl">
                    Behind the scenes
                </h2>
                <p className="text-blue text-center mt-5 z-10 md:max-w-[70%] lg:max-w-[640px] md:text-base-variant">
                    <AriaLink
                        href="https://www.youtube.com/watch?v=TEhh8UuG6u8"
                        target="_blank"
                        rel="external"
                    >
                        <motion.q
                        // animate={{ opacity: [0.7, 1, 1, 0.7] }}
                        // transition={{
                        //     duration: 2,
                        //     repeat: Infinity,
                        //     ease: 'easeInOut',
                        // }}
                        >
                            Ade due Damballa. Give me the power, I beg of you!
                        </motion.q>
                    </AriaLink>
                    <br />
                    <br />A look behind the scenes at Freck. All these totems
                    play an important role in conjuring the energies needed to
                    design in contemporary times.
                </p>
                <div className="relative bottom-[-50px] w-[100vw] sm:w-full aspect-desk mt-[-30px] md:mt-[-90px] lg:bottom-[-90px]">
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

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
                <h3 className="text-blue font-serif font-medium text-lg-variant md:text-xl lg:text-3xl">
                    Unveiling the magic
                </h3>
                <p className="text-blue text-center text-base-variant mt-5 z-10 md:max-w-[70%] lg:max-w-[640px] md:text-base-v2">
                    <AriaLink
                        href="https://www.youtube.com/watch?v=TEhh8UuG6u8"
                        target="_blank"
                        rel="external"
                    >
                        <q>
                            Ade due Damballa. Give me the power, I beg of you!
                        </q>
                    </AriaLink>
                    <br />
                    <br />
                    An exclusive glimpse behind the curtains at Freck. These
                    totems hold a vital role, channeling the energies required
                    for cutting-edge design in today&apos;s world.
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

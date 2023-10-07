'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import AriaLink from './AriaLink'
import Image from 'next/image'
import Button from './Button'
import Logo from './Logo'
import email from '../../public/img/Email-small.png'
import phone from '../../public/img/Phone_small.png'
import linkedin from '../../public/img/Linkedin_small.png'
import EmailOverlay from './EmailOverlay'

const Footer = () => {
    const [isEmailOverlayOpen, setIsEmailOverlayOpen] = useState(false)
    const themeContext = useContext(ThemeContext)

    return (
        <motion.footer
            id="contact"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center px-10 py-6 gap-10 mt-20 mb-2"
        >
            <h3 className="text-lg font-medium font-serif max-w-[400px] text-center items-center md:text-2xl md:max-w-[700px]">
                You can contact me through email or social media
            </h3>
            <div className="flex flex-row gap-4 mb-12 pointer-events-auto place-items-center md:gap-9">
                <Button
                    variant="ghost"
                    className="relative p-0 w-20 md:w-[120px] h-20 md:h-[120px] rounded-3xl active:scale-90 hover:scale-[102%] duration-200"
                    onPress={() => setIsEmailOverlayOpen(true)}
                    aria-label="Press to see email address"
                >
                    <Image src={email} fill quality={100} alt="Email icon" />
                </Button>
                <AriaLink
                    href="tel:+31657582654"
                    aria-label="Press to call"
                    target="_parent"
                    className="relative w-20 md:w-[120px] h-20 md:h-[120px] rounded-3xl active:scale-90 hover:scale-[102%] duration-200"
                >
                    <Image src={phone} fill quality={100} alt="Phone icon" />
                </AriaLink>
                <AriaLink
                    href="https://www.linkedin.com/in/sarunepaulauskaite/"
                    aria-label="Press to view LinkedIn"
                    target="_blank"
                    rel="external"
                    className="relative w-20 md:w-[120px] h-20 md:h-[120px] rounded-3xl active:scale-90 hover:scale-[102%] duration-200"
                >
                    <Image
                        src={linkedin}
                        fill
                        quality={100}
                        alt="LinkedIn icon"
                    />
                </AriaLink>
            </div>
            <div className="w-full flex flex-col gap-4 justify-between items-center md:flex-row md:gap-0">
                <AriaLink href="/" aria-label="Freck Studio Logo">
                    <Logo fill={themeContext?.isDarkMode ? 'white' : 'black'} />
                </AriaLink>
                <div className="flex flex-row items-center gap-4 lg:gap-8 text-sm font-medium pointer-cursor md:translate-x-2">
                    <Button
                        variant="ghost"
                        href="#why"
                        ariaLabel="Section Why Freck"
                        className="hover:text-blue transition active:scale-90"
                    >
                        Why Freck
                    </Button>
                    <Button
                        variant="ghost"
                        href="#about"
                        ariaLabel="Section About"
                        className="hover:text-blue transition active:scale-90"
                    >
                        About
                    </Button>
                    <Button
                        variant="ghost"
                        href="#projects"
                        ariaLabel="Section Projects"
                        className="hover:text-blue transition active:scale-90"
                    >
                        Projects
                    </Button>
                </div>
                <div className="flex flex-row justify-end">
                    <Button onPress={() => setIsEmailOverlayOpen(true)}>
                        <span className="lg:text-base-variant">Contact Me</span>
                    </Button>
                </div>
            </div>
            <AnimatePresence>
                {isEmailOverlayOpen && (
                    <motion.div
                        className="w-screen h-screen fixed top-0 flex flex-col justify-center items-center bg-black/50 z-20"
                        key="contactForm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <EmailOverlay
                            setIsEmailOverlayOpen={setIsEmailOverlayOpen}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.footer>
    )
}

export default Footer

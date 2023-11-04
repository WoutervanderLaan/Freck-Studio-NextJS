'use client'

import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import AriaLink from './AriaLink'
import Image from 'next/image'
import Button from './Button'
import Logo from './Logo'
import email from '../../public/img/Email-small.png'
import phone from '../../public/img/Phone_small.png'
import linkedin from '../../public/img/Linkedin_small.png'
import EmailOverlay from './EmailOverlay'
import UseViewportDetection from '@/hooks/useViewportDetection'
import { OverlayContext } from '@/contexts/OverlayContext'

const Footer = () => {
    const overlayContext = useContext(OverlayContext)
    const themeContext = useContext(ThemeContext)
    const isTablet = UseViewportDetection(768)

    return (
        <motion.footer
            id="contact"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center px-10 gap-14 mt-12 mb-6 font-normal"
        >
            <div className="flex flex-col gap-7 text-center items-center max-w-[400px] md:max-w-[640px]">
                <h3 className="text-lg font-medium font-serif md:text-2xl">
                    Freck Studio <br /> Amsterdam <br /> the Netherlands, Earth
                </h3>
                <p className="text-base-v2">
                    For new biz, sugar or juicy content call +370 (639) 20 855,
                    email saruunep@gmail.com or drop by the office at{' '}
                    <br className="hidden md:block" /> Jacob Oliepad 8 in
                    Amsterdam, the Netherlands.
                </p>
            </div>
            <div className="flex flex-row gap-4 mb-6 pointer-events-auto place-items-center sm:gap-6 md:gap-9">
                <Button
                    variant="ghost"
                    className="relative p-0 w-20 md:w-[120px] h-20 md:h-[120px] rounded-2xl md:rounded-3xl active:scale-90 hover:scale-[102%] duration-200"
                    onPress={() => overlayContext?.setIsEmailOverlayOpen(true)}
                    aria-label="Press to see email address"
                >
                    <Image
                        src={email}
                        fill
                        sizes="(10vw)"
                        quality={100}
                        alt="Email icon"
                    />
                </Button>
                <AriaLink
                    href="tel:+37063920855"
                    aria-label="Press to call"
                    target="_parent"
                    className="relative w-20 md:w-[120px] h-20 md:h-[120px] rounded-2xl md:rounded-3xl active:scale-90 hover:scale-[102%] duration-200"
                >
                    <Image
                        src={phone}
                        fill
                        sizes="(10vw)"
                        quality={100}
                        alt="Phone icon"
                    />
                </AriaLink>
                <AriaLink
                    href="https://www.linkedin.com/in/sarunepaulauskaite/"
                    aria-label="Press to view LinkedIn"
                    target="_blank"
                    rel="external"
                    className="relative w-20 md:w-[120px] h-20 md:h-[120px] rounded-2xl md:rounded-3xl active:scale-90 hover:scale-[102%] duration-200"
                >
                    <Image
                        src={linkedin}
                        fill
                        sizes="(10vw)"
                        quality={100}
                        alt="LinkedIn icon"
                    />
                </AriaLink>
            </div>
            {isTablet === false && (
                <div className="w-full flex flex-col justify-between items-center md:flex-row">
                    <AriaLink
                        href="/"
                        aria-label="Freck Studio Logo"
                        className="flex-1"
                    >
                        <Logo
                            fill={themeContext?.isDarkMode ? 'white' : 'black'}
                        />
                    </AriaLink>
                    <div className="flex flex-row items-center lg:gap-4 text-sm font-medium pointer-cursor">
                        <Button
                            variant="ghost"
                            href="/#why"
                            ariaLabel="Section Why Freck"
                            className="hover:text-blue transition active:scale-90"
                        >
                            Why Freck
                        </Button>
                        <Button
                            variant="ghost"
                            href="/#services"
                            ariaLabel="Section Services"
                            className="hover:text-blue transition active:scale-90"
                        >
                            Services
                        </Button>
                        <Button
                            variant="ghost"
                            href="/#about"
                            ariaLabel="Section About"
                            className="hover:text-blue transition active:scale-90"
                        >
                            About
                        </Button>
                        <Button
                            variant="ghost"
                            href="/#projects"
                            ariaLabel="Section Projects"
                            className="hover:text-blue transition active:scale-90"
                        >
                            Projects
                        </Button>
                    </div>
                    <div className="flex flex-row justify-end flex-1 pointer-events-auto">
                        <Button
                            onPress={() =>
                                overlayContext?.setIsContactOverlayOpen(true)
                            }
                        >
                            <span className="lg:text-base-variant">
                                Contact Form
                            </span>
                        </Button>
                    </div>
                </div>
            )}

            <EmailOverlay />
        </motion.footer>
    )
}

export default Footer

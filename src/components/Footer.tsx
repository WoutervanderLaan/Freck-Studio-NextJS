'use client'

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import { useState } from 'react'
import AriaLink from './AriaLink'
import Image from 'next/image'
import Button from './Button'
import Logo from './Logo'
import email from '../../public/img/Email-small.png'
import phone from '../../public/img/Phone_small.png'
import linkedin from '../../public/img/Linkedin_small.png'
import ContactForm from './ContactForm'

const Footer = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false)

    return (
        <LazyMotion features={domAnimation}>
            <footer
                id="contact"
                className="w-full flex flex-col items-center px-10 py-6 gap-10 mt-20 mb-2"
            >
                <h3 className="text-lg font-medium font-serif max-w-[80%] text-center items-center md:text-2xl md:max-w-[50%]">
                    You can contact me through email or social media
                </h3>
                <div className="flex flex-row gap-10 md:gap-20 mb-12 pointer-events-auto">
                    <AriaLink
                        href="mailto:saruunep@gmail.com"
                        aria-label="Press to send email"
                        target="_parent"
                    >
                        <Image
                            src={email}
                            width={120}
                            height={120}
                            quality={100}
                            alt="Email icon"
                        />
                    </AriaLink>
                    <AriaLink
                        href="tel:+31657582654"
                        aria-label="Press to call"
                        target="_parent"
                    >
                        <Image
                            src={phone}
                            width={120}
                            height={120}
                            quality={100}
                            alt="Phone icon"
                        />
                    </AriaLink>
                    <AriaLink
                        href="https://www.linkedin.com/in/sarunepaulauskaite/"
                        aria-label="Press to view LinkedIn"
                        target="_blank"
                        rel="external"
                    >
                        <Image
                            src={linkedin}
                            width={120}
                            height={120}
                            quality={100}
                            alt="LinkedIn icon"
                        />
                    </AriaLink>
                </div>
                <div className="w-full flex flex-col gap-4 justify-between items-center md:flex-row md:gap-0">
                    <AriaLink href="/" aria-label="Freck Studio Logo">
                        <Logo />
                    </AriaLink>
                    <div className="flex flex-row items-center gap-4 md:gap-8 text-sm font-medium pointer-cursor">
                        <Button
                            variant="ghost"
                            href="#why"
                            ariaLabel="Section Why Freck"
                            className="hover:text-blue transition active:scale-90"
                        >
                            WHY FRECK?
                        </Button>
                        <Button
                            variant="ghost"
                            href="#about"
                            ariaLabel="Section About"
                            className="hover:text-blue transition active:scale-90"
                        >
                            ABOUT
                        </Button>
                        <Button
                            variant="ghost"
                            href="#projects"
                            ariaLabel="Section Projects"
                            className="hover:text-blue transition active:scale-90"
                        >
                            PROJECTS
                        </Button>
                    </div>
                    <div className="flex flex-row justify-end">
                        <Button onPress={() => setIsContactFormOpen(true)}>
                            Contact Me
                        </Button>
                    </div>
                </div>
                <AnimatePresence>
                    {isContactFormOpen && (
                        <m.div
                            className="w-screen h-screen fixed top-0 flex flex-col justify-center items-center bg-black/50 z-30"
                            key="contactForm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <ContactForm
                                setIsContactFormOpen={setIsContactFormOpen}
                            />
                        </m.div>
                    )}
                </AnimatePresence>
            </footer>
        </LazyMotion>
    )
}

export default Footer

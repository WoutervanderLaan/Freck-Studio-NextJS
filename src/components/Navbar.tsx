'use client'

import Button from './Button'
import AriaLink from './AriaLink'
import { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import UseViewportDetection from '@/hooks/useViewportDetection'
import Logo from '@/components/Logo'
import { ThemeContext } from '@/contexts/ThemeContext'
import Moon from './icons/Moon'
import Sun from './icons/Sun'
import Hamburger from './icons/Hamburger'

const Navbar = () => {
    const themeContext = useContext(ThemeContext)
    const isTablet = UseViewportDetection(768)

    useEffect(() => {
        console.log(isTablet)
    }, [isTablet])

    return (
        <nav className="fixed top-0 bg-white z-30 w-full flex flex-row justify-between items-center p-4 md:p-10 md:static dark:bg-dark-bg">
            <AriaLink href="/" aria-label="Freck Studio Logo">
                <Logo />
            </AriaLink>
            {isTablet === false && (
                <>
                    <div className="flex flex-row items-center gap-4 md:gap-8 text-sm font-medium pointer-cursor">
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
                    <div className="hidden lg:block lg:w-[110px]" />
                    <div className="lg:fixed right-10 z-30">
                        <Button
                            variant="switch"
                            className="relative bg-blue border-blue border-2 dark:bg-dark-bg dark:border-green"
                            onPress={() => {
                                themeContext?.setIsDarkMode(
                                    (prevValue) => !prevValue
                                )
                            }}
                            ariaLabel="Theme slider"
                        >
                            <Sun />
                            <Moon />
                            <motion.div
                                className="absolute top-0 bg-purple dark:bg-green rounded-full h-6 w-6 m-0.5"
                                layout
                                animate={{
                                    left: themeContext?.isDarkMode ? 0 : 32,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                            />
                        </Button>
                    </div>
                </>
            )}
            {isTablet && (
                <div className="flex flex-row gap-4 md:gap-6">
                    <Button
                        variant="small"
                        href="#contact"
                        className="self-center lg:self-start"
                        ariaLabel="Contact Me"
                    >
                        <span className="text-sm md:text-base xl:text-base-variant text-pink">
                            Contact Me
                        </span>
                    </Button>
                    <Button
                        variant="ghost"
                        className="aspect-square px-1 py-0"
                        onPress={() => console.log('pressed')}
                        icon={<Hamburger isOpen={false} />}
                    />
                </div>
            )}
        </nav>
    )
}

export default Navbar

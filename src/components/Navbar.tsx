'use client'

import Button from './Button'
import AriaLink from './AriaLink'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import Logo from '@/components/Logo'
import { ThemeContext } from '@/contexts/ThemeContext'
import Moon from './icons/Moon'
import Sun from './icons/Sun'

const Navbar = () => {
    const themeContext = useContext(ThemeContext)

    return (
        <nav className="w-full flex flex-col justify-between items-center p-10 sm:flex-row">
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
            <div className="hidden lg:block lg:w-[110px]" />
            <div className="lg:fixed right-10 z-30">
                <Button
                    variant="switch"
                    className="relative bg-blue border-blue border-2 dark:bg-dark-bg dark:border-green"
                    onPress={() => {
                        themeContext?.setIsDarkMode((prevValue) => !prevValue)
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
        </nav>
    )
}

export default Navbar

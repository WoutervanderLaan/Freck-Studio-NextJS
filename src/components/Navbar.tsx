'use client'

import Button from './Button'
import AriaLink from './AriaLink'
import { useContext } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import MagneticButton from './MagneticButton'
import Logo from '@/components/Logo'
import { ThemeContext } from '@/contexts/ThemeContext'
import Moon from './icons/Moon'
import Sun from './icons/Sun'

const Navbar = () => {
    const themeContext = useContext(ThemeContext)

    return (
        <LazyMotion features={domAnimation}>
            <nav className="px-10 w-full flex flex-col justify-between items-center pt-6 pb-10 sm:flex-row">
                <AriaLink href="/" aria-label="Freck Studio Logo">
                    <Logo />
                </AriaLink>
                <div className="flex flex-row items-center gap-4 md:gap-8 text-sm font-medium pointer-cursor">
                    <MagneticButton href="#about" ariaLabel="Section About">
                        ABOUT
                    </MagneticButton>
                    <MagneticButton href="#why" ariaLabel="Section Why Freck">
                        WHY FRECK?
                    </MagneticButton>
                    <MagneticButton href="/" ariaLabel="Section Projects">
                        PROJECTS
                    </MagneticButton>
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
                        <m.div
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
        </LazyMotion>
    )
}

export default Navbar

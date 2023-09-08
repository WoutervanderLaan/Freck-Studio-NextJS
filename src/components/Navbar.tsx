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
            <nav className="container w-full flex flex-col justify-between items-center p-6 sm:flex-row">
                <AriaLink href="/" aria-label="Freck Studio Logo">
                    <Logo />
                </AriaLink>
                <div className="flex flex-row items-center gap-4 text-sm font-medium pointer-cursor">
                    <MagneticButton href="/" ariaLabel="Section Who">
                        WHO
                    </MagneticButton>
                    <MagneticButton href="/" ariaLabel="Section What">
                        WHAT
                    </MagneticButton>
                    <MagneticButton href="/" ariaLabel="Section Work">
                        WORK
                    </MagneticButton>
                </div>

                <Button
                    className="relative bg-purple rounded-full h-8 w-16 hover:scale-110 flex justify-between items-center p-1.5 border-2 border-purple dark:bg-dark-bg dark:border-green"
                    onPress={() => {
                        themeContext?.setIsDarkMode((prevValue) => !prevValue)
                    }}
                    ariaLabel="Theme slider"
                >
                    <Sun />
                    <Moon />
                    <m.div
                        className="absolute top-0 bg-blue dark:bg-green rounded-full h-7 w-7"
                        layout
                        animate={{
                            left: themeContext?.isDarkMode ? 0 : 32,
                        }}
                        transition={{
                            duration: 0.2,
                            type: 'spring',
                            stiffness: 700,
                            damping: 30,
                        }}
                    />
                </Button>
            </nav>
        </LazyMotion>
    )
}

export default Navbar

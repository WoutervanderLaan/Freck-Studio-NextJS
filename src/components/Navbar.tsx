'use client'

import Button from './Button'
import AriaLink from './AriaLink'
import { useState } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import MagneticButton from './MagneticButton'

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <LazyMotion features={domAnimation}>
            <nav className="container w-full flex justify-between items-center p-6">
                <AriaLink href="/" aria-label="Freck Studio Logo">
                    <h2 className="font-cursive text-xl font-bold">Freck.</h2>
                </AriaLink>
                <div className="flex flex-row items-center gap-4 text-sm font-medium pointer-cursor">
                    <MagneticButton href="/">WHO</MagneticButton>
                    <MagneticButton href="/">WHAT</MagneticButton>
                    <MagneticButton href="/">WORK</MagneticButton>
                </div>
                <Button
                    className="relative bg-purple rounded-full h-7 w-14 hover:scale-110"
                    onPress={() => setIsDarkMode((prevValue) => !prevValue)}
                >
                    <m.div
                        className="absolute top-0 bg-blue rounded-full h-6 w-6 m-0.5"
                        animate={{
                            left: isDarkMode ? 0 : 28,
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

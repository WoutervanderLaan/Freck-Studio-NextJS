'use client'

import { useContext, useEffect, useState } from 'react'
import { FocusScope } from 'react-aria'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import UseViewportDetection from '@/hooks/useViewportDetection'
import { ThemeContext } from '@/contexts/ThemeContext'
import Logo from '@/components/Logo'
import Moon from './icons/Moon'
import Sun from './icons/Sun'
import Hamburger from './icons/Hamburger'
import Button from './Button'
import AriaLink from './AriaLink'
import ContactOverlay from './ContactOverlay'
import { OverlayContext } from '@/contexts/OverlayContext'

const Navbar = () => {
    const themeContext = useContext(ThemeContext)
    const overlayContext = useContext(OverlayContext)
    const isTablet = UseViewportDetection(768)
    const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState<
        boolean | null
    >(null)
    const router = useRouter()

    const date = new Date()
    const year = date.getFullYear()

    useEffect(() => {
        if (isMenuDropdownOpen || overlayContext?.isContactOverlayOpen) {
            document.body.classList.add('overflow-hidden')
        }
        if (!isMenuDropdownOpen && !overlayContext?.isContactOverlayOpen) {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isMenuDropdownOpen, overlayContext?.isContactOverlayOpen])

    useEffect(() => {
        isTablet && setIsMenuDropdownOpen(false)
    }, [isTablet])

    const backgroundVariants = {
        default: {
            height: '100%',
            backgroundColor: themeContext?.isDarkMode ? '#0E100D' : '#ffffff',
            transition: { delay: 0.2 },
        },
        openMenu: { height: '105dvh', backgroundColor: '#054BFA' },
    }

    return (
        <>
            <FocusScope contain={isMenuDropdownOpen === true}>
                <nav className="z-20 fixed top-0 w-full flex md:static">
                    <motion.div
                        className="absolute w-full h-full top-0 left-0 md:hidden"
                        variants={backgroundVariants}
                        initial={'default'}
                        animate={isMenuDropdownOpen ? 'openMenu' : 'default'}
                        transition={{ delay: 0.1, duration: 0.1 }}
                    />
                    <div className="flex flex-row w-full justify-between items-center p-4 z-20 md:p-10 md:static">
                        <AriaLink href="/" aria-label="Freck Studio Logo">
                            <Logo
                                fill={
                                    isMenuDropdownOpen ||
                                    themeContext?.isDarkMode
                                        ? 'white'
                                        : 'black'
                                }
                            />
                        </AriaLink>
                        {isTablet === false && (
                            <>
                                <div className="flex flex-row items-center gap-4 md:gap-8 font-medium pointer-cursor">
                                    <Button
                                        variant="ghost"
                                        href="#why"
                                        ariaLabel="Section Why Freck"
                                        className="hover:text-blue transition active:scale-90"
                                    >
                                        Why Freck?
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        href="#projects"
                                        ariaLabel="Section Projects"
                                        className="hover:text-blue transition active:scale-90"
                                    >
                                        Projects
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        href="#about"
                                        ariaLabel="Section About"
                                        className="hover:text-blue transition active:scale-90"
                                    >
                                        About
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
                                                left: themeContext?.isDarkMode
                                                    ? 0
                                                    : 32,
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
                                    variant="ghost"
                                    className="aspect-square px-1 py-0"
                                    ariaLabel="Click to open menu"
                                    onPress={() =>
                                        setIsMenuDropdownOpen(
                                            (prevValue) => !prevValue
                                        )
                                    }
                                    icon={
                                        <Hamburger
                                            isOpen={isMenuDropdownOpen === true}
                                            dark={themeContext?.isDarkMode}
                                        />
                                    }
                                />
                            </div>
                        )}
                    </div>
                </nav>

                <AnimatePresence>
                    {isMenuDropdownOpen && isTablet && (
                        <motion.div
                            key="menuOverlay"
                            className="fixed z-20 top-[-80px] right-0 w-screen h-[100%] mt-20 p-4 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.2 } }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="h-full flex flex-col justify-end gap-32">
                                <ul className="flex flex-col pointer-events-auto">
                                    <li>
                                        <Button
                                            variant="ghost"
                                            onPress={() => {
                                                router.push('/#why')
                                                setIsMenuDropdownOpen(false)
                                            }}
                                        >
                                            <span className="text-lg-variant text-white">
                                                Why Freck
                                            </span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            variant="ghost"
                                            onPress={() => {
                                                router.push('/#about')
                                                setIsMenuDropdownOpen(false)
                                            }}
                                        >
                                            <span className="text-lg-variant text-white">
                                                About
                                            </span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            variant="ghost"
                                            onPress={() => {
                                                router.push('/#projects')
                                                setIsMenuDropdownOpen(false)
                                            }}
                                        >
                                            <span className="text-lg-variant text-white">
                                                Projects
                                            </span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            variant="ghost"
                                            onPress={() => {
                                                themeContext?.setIsDarkMode(
                                                    (prevValue) => !prevValue
                                                )
                                            }}
                                        >
                                            <span className="text-lg-variant text-orange">
                                                {themeContext?.isDarkMode
                                                    ? 'Light Theme'
                                                    : 'Dracula Theme'}
                                            </span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            variant="ghost"
                                            onPress={() => {
                                                overlayContext?.setIsContactOverlayOpen(
                                                    true
                                                )
                                                setIsMenuDropdownOpen(false)
                                            }}
                                        >
                                            <span className="text-lg-variant text-white">
                                                Contact
                                            </span>
                                        </Button>
                                    </li>
                                </ul>
                                <p className="text-center text-white text-sm">{`© Freck Studio ${year}`}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </FocusScope>

            <ContactOverlay />
        </>
    )
}

export default Navbar

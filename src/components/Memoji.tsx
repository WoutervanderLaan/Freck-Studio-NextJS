'use client'

import Image, { StaticImageData } from 'next/image'
import { useRef, useEffect, useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'
import memoji from '../../public/img/Memoji.png'
import memojiDark from '../../public/img/MemojiDark.png'
import memojiHand from '../../public/img/MemojiHand.png'
import memojiHandDark from '../../public/img/MemojiHandDark.png'
import memojiShadow from '../../public/img/MemojiShadow.png'

const Memoji = () => {
    const themeContext = useContext(ThemeContext)

    return (
        <AnimatePresence mode="wait">
            {!themeContext?.isDarkMode && (
                <motion.div
                    key="memojiLight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <MemojiPart variant={memoji} />
                    <MemojiPart variant={memojiHand} dataValue={13} />
                    <MemojiPart variant={memojiShadow} />
                </motion.div>
            )}
            {themeContext?.isDarkMode && (
                <motion.div
                    key="memojiDark"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <MemojiPart variant={memojiDark} />
                    <MemojiPart variant={memojiHandDark} dataValue={13} />
                    <MemojiPart variant={memojiShadow} />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

type MemojiPartProps = {
    variant: StaticImageData
    dataValue?: number
}

const MemojiPart = ({ variant, dataValue = 10 }: MemojiPartProps) => {
    const ref = useRef<HTMLImageElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    useEffect(() => {
        document.addEventListener('mousemove', (e) => moveAvatar(e), {
            passive: true,
        })

        return () => {
            document.removeEventListener('mousemove', (e) => moveAvatar(e))
        }
    }, [])

    const moveAvatar = (e: MouseEvent) => {
        if (window.innerWidth <= 1024) {
            x.set(0)
            y.set(0)
        }
        if (window.innerWidth >= 1024) {
            x.set((e.clientX * dataValue) / 250)
            y.set((e.clientY * dataValue) / 250)
        }
    }

    return (
        <motion.div
            layout
            style={{ x, y }}
            animate={{
                y: [0, 1 * dataValue, 0],
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                type: 'tween',
                ease: 'easeInOut',
            }}
            className="max-w-[600px]"
        >
            <Image
                src={variant}
                alt="Freck Studio Memoji Avatar"
                className="absolute top-0"
                ref={ref}
                priority
                draggable="false"
            />
        </motion.div>
    )
}

export default Memoji

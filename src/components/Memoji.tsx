'use client'

import Image, { StaticImageData } from 'next/image'
import { useRef, useEffect, useState, useMemo } from 'react'
import { useThemeContext } from '@/contexts/ThemeContext'
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'
import memoji from '../../public/img/Memoji_small.png'
import memojiDark from '../../public/img/MemojiDark_small.png'
import memojiHand from '../../public/img/MemojiHand_small.png'
import memojiHandDark from '../../public/img/MemojiHandDark_small.png'
import memojiShadow from '../../public/img/MemojiShadow_small.png'

const Memoji = () => {
    const { isDarkMode } = useThemeContext()
    const [loading, setLoading] = useState({ 1: true, 2: true, 3: true })

    const onLoad = (index: number) =>
        setLoading((prev) => ({ ...prev, [index]: false }))

    const appear = useMemo(
        () => Object.values(loading).every((val) => !val),
        [loading]
    )

    return (
        <AnimatePresence mode="wait">
            {!isDarkMode && (
                <motion.div
                    key="memojiLight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: appear ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <MemojiPart variant={memoji} onLoad={() => onLoad(1)} />
                    <MemojiPart
                        variant={memojiHand}
                        dataValue={13}
                        onLoad={() => onLoad(2)}
                    />
                    <MemojiPart
                        variant={memojiShadow}
                        onLoad={() => onLoad(3)}
                    />
                </motion.div>
            )}
            {isDarkMode && appear && (
                <motion.div
                    key="memojiDark"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: appear ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <MemojiPart variant={memojiDark} onLoad={() => onLoad(1)} />
                    <MemojiPart
                        variant={memojiHandDark}
                        dataValue={13}
                        onLoad={() => onLoad(2)}
                    />
                    <MemojiPart
                        variant={memojiShadow}
                        onLoad={() => onLoad(3)}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

type MemojiPartProps = {
    variant: StaticImageData
    dataValue?: number
    onLoad: () => void
}

const MemojiPart = ({ variant, dataValue = 10, onLoad }: MemojiPartProps) => {
    const ref = useRef<HTMLImageElement>(null)
    const x = useMotionValue(0)

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
        }
        if (window.innerWidth >= 1024) {
            x.set(((e.clientX - window.innerWidth / 2) * dataValue) / 250)
        }
    }

    return (
        <motion.div
            layout
            style={{ x }}
            animate={{
                y: [0, 1 * dataValue, 0],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                type: 'tween',
                ease: 'easeInOut',
            }}
            className="max-w-[600px] 2xl:max-w-[700px]"
        >
            <Image
                src={variant}
                alt="Freck Studio Memoji Avatar"
                className="absolute top-0"
                ref={ref}
                priority
                draggable="false"
                onLoad={onLoad}
            />
        </motion.div>
    )
}

export default Memoji

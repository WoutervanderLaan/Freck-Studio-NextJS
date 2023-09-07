'use client'

import Image, { StaticImageData } from 'next/image'
import {
    useRef,
    useEffect,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import UseViewportDetection from '@/hooks/useViewportDetection'
import memoji from '../../public/img/Memoji.png'
import memojiDark from '../../public/img/MemojiDark.png'
import memojiHand from '../../public/img/MemojiHand.png'
import memojiHandDark from '../../public/img/MemojiHandDark.png'
import memojiShadow from '../../public/img/MemojiShadow.png'

type Loading = {
    avatar: boolean
    hand: boolean
    shadow: boolean
}

const Memoji = () => {
    const themeContext = useContext(ThemeContext)
    const [isFinishedLoading, setIsFinishedLoading] = useState<Loading>({
        avatar: false,
        hand: false,
        shadow: false,
    })

    useEffect(() => {
        if (Object.values(isFinishedLoading).includes(false))
            themeContext?.setShowAvatar(true)
    }, [isFinishedLoading])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <MemojiPart
                name="avatar"
                variant={
                    themeContext?.isDarkMode === 'light' ? memoji : memojiDark
                }
                setIsFinishedLoading={setIsFinishedLoading}
            />
            <MemojiPart
                name="hand"
                variant={
                    themeContext?.isDarkMode === 'light'
                        ? memojiHand
                        : memojiHandDark
                }
                dataValue={13}
                setIsFinishedLoading={setIsFinishedLoading}
            />
            <MemojiPart
                name="shadow"
                variant={memojiShadow}
                setIsFinishedLoading={setIsFinishedLoading}
            />
        </motion.div>
    )
}

type MemojiPartProps = {
    name: string
    variant: StaticImageData
    dataValue?: number
    setIsFinishedLoading: Dispatch<SetStateAction<Loading>>
}

const MemojiPart = ({
    name,
    variant,
    dataValue = 10,
    setIsFinishedLoading,
}: MemojiPartProps) => {
    const ref = useRef<HTMLImageElement>(null)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const isTablet = UseViewportDetection(768)

    useEffect(() => {
        document.addEventListener('mousemove', (e) => moveAvatar(e, dataValue))
        return () =>
            document.removeEventListener('mousemove', (e) =>
                moveAvatar(e, dataValue)
            )
    }, [ref])

    const moveAvatar = (e: MouseEvent, dataValue: number) => {
        setX((e.clientX * dataValue) / 250)
        setY((e.clientY * dataValue) / 250)
    }

    return (
        <motion.div layout style={{ x, y }} className="max-w-[600px]">
            <Image
                src={variant}
                width={600}
                height={600}
                alt="Freck Studio Memoji Avatar"
                className="absolute top-0"
                ref={ref}
                priority
                draggable="false"
                onLoadingComplete={() => {
                    setIsFinishedLoading((prevValue) => ({
                        ...prevValue,
                        [name]: true,
                    }))
                }}
            />
        </motion.div>
    )
}

export default Memoji

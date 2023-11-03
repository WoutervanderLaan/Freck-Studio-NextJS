import { ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useWillChange } from 'framer-motion'
import UseViewportDetection from '@/hooks/useViewportDetection'
import Button from './Button'

type MagneticButtonProps = {
    children: ReactNode
    ariaLabel?: string
    href?: string
    onPress?: () => void
    magnetStrength?: number
}

const MAGNET_STRENGHT = 30

const DEFAULT_COORDINATES = {
    x: 0,
    y: 0,
}

const MagneticButton = (props: MagneticButtonProps) => {
    const magneticAreaRef = useRef<HTMLDivElement>(null)
    const willChange = useWillChange()
    const isMobile = UseViewportDetection()
    const [coordinates, setCoordinates] = useState<{ x: number; y: number }>(
        DEFAULT_COORDINATES
    )

    const {
        children,
        href = '',
        onPress = () => {},
        magnetStrength = MAGNET_STRENGHT,
        ariaLabel,
    } = props

    useEffect(() => {
        if (isMobile) return

        if (magneticAreaRef.current) {
            magneticAreaRef.current.addEventListener(
                'mousemove',
                magnetizeButton
            )
            magneticAreaRef.current.addEventListener('mouseleave', () =>
                setCoordinates(DEFAULT_COORDINATES)
            )

            return () => {
                magneticAreaRef.current?.removeEventListener(
                    'mousemove',
                    magnetizeButton
                )
                magneticAreaRef.current?.removeEventListener('mouseleave', () =>
                    setCoordinates(DEFAULT_COORDINATES)
                )
            }
        }
    }, [magneticAreaRef.current, isMobile])

    const magnetizeButton = (e: MouseEvent) => {
        if (magneticAreaRef.current) {
            const boundingRect = magneticAreaRef.current.getBoundingClientRect()

            const x =
                ((e.clientX - boundingRect.left) / (boundingRect.width / 2) -
                    1) *
                magnetStrength
            const y =
                ((e.clientY - boundingRect.top) / (boundingRect.height / 2) -
                    1) *
                magnetStrength

            setCoordinates({ x, y })
        }
    }

    return (
        <div
            ref={magneticAreaRef}
            className="w-fit h-24 min-w-[96px] flex justify-center items-center rounded-full"
        >
            <motion.div
                className="rounded-full"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                style={{ willChange }}
                animate={{
                    x: coordinates.x,
                    y: coordinates.y,
                }}
                transition={{
                    duration: 0.1,
                    type: 'tween',
                }}
                tabIndex={-1}
                draggable="false"
            >
                {'href' in props && (
                    <Button variant="ghost" ariaLabel={ariaLabel} href={href}>
                        {children}
                    </Button>
                )}
                {'onPress' in props && (
                    <Button
                        variant="ghost"
                        ariaLabel={ariaLabel}
                        onPress={onPress}
                    >
                        {children}
                    </Button>
                )}
            </motion.div>
        </div>
    )
}

export default MagneticButton

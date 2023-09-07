import { ReactNode, useEffect, useRef, useState } from 'react'
import { m, useWillChange } from 'framer-motion'
import UseViewportDetection from '@/hooks/useViewportDetection'
import Button from './Button'
import classNames from 'classnames'

type magnetStyleVariants = 'ghost' | 'other'

const variantStyles: Record<magnetStyleVariants, string> = {
    ghost: 'p-4 rounded-full',
    other: '',
}

type MagneticButtonProps = {
    children: ReactNode
    variant?: magnetStyleVariants
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
        variant = 'ghost',
        href = '',
        onPress = () => {},
        magnetStrength = MAGNET_STRENGHT,
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
            className="w-24 h-24 flex justify-center items-center rounded-full"
        >
            <m.div
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
                    <Button
                        className={classNames(variantStyles[variant])}
                        href={href}
                    >
                        {children}
                    </Button>
                )}
                {'onPress' in props && (
                    <Button
                        className={classNames(variantStyles[variant])}
                        onPress={onPress}
                    >
                        {children}
                    </Button>
                )}
            </m.div>
        </div>
    )
}

export default MagneticButton

import { ReactNode, useEffect, useRef, useState } from 'react'
import { m, useWillChange } from 'framer-motion'
import Button from './Button'

type MagneticButtonProps = {
    children: ReactNode
    href?: string
    onPress?: () => {}
    magnetStrength?: number
}

const MagneticButton = (props: MagneticButtonProps) => {
    const magneticAreaRef = useRef<HTMLDivElement>(null)
    const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    })

    const willChange = useWillChange()

    const {
        children,
        href = '',
        onPress = () => {},
        magnetStrength = 30,
    } = props

    useEffect(() => {
        if (magneticAreaRef.current) {
            magneticAreaRef.current.addEventListener(
                'mousemove',
                magnetizeButton
            )
            magneticAreaRef.current.addEventListener(
                'mouseleave',
                magnetizeButtonEnd
            )

            return () => {
                magneticAreaRef.current?.removeEventListener(
                    'mousemove',
                    magnetizeButton
                )
                magneticAreaRef.current?.removeEventListener(
                    'mouseleave',
                    magnetizeButtonEnd
                )
            }
        }
    }, [magneticAreaRef.current])

    const magnetizeButton = (e: MouseEvent) => {
        if (magneticAreaRef.current) {
            const boundingRect = magneticAreaRef.current.getBoundingClientRect()
            const strength = magnetStrength

            const relX =
                ((e.clientX - boundingRect.left) / (boundingRect.width / 2) -
                    1) *
                strength
            const relY =
                ((e.clientY - boundingRect.top) / (boundingRect.height / 2) -
                    1) *
                strength

            setCoordinates({ x: relX, y: relY })
        }
    }

    const magnetizeButtonEnd = () => {
        setCoordinates({ x: 0, y: 0 })
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
            >
                {'href' in props && (
                    <Button className="p-4 rounded-full" href={href}>
                        {children}
                    </Button>
                )}
                {'onPress' in props && (
                    <Button className="p-4 rounded-full" onPress={onPress}>
                        {children}
                    </Button>
                )}
            </m.div>
        </div>
    )
}

export default MagneticButton

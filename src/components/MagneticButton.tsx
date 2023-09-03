import { ReactNode, useEffect, useRef, useState } from 'react'
import { m, useWillChange } from 'framer-motion'
import Button from './Button'

const MagneticButton = ({
    children,
    href = '',
    onPress,
}: {
    children: ReactNode
    href?: string
    onPress?: () => {}
}) => {
    const areaRef = useRef<HTMLDivElement>(null)
    const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    })
    const willChange = useWillChange()

    useEffect(() => {
        if (areaRef.current) {
            areaRef.current.addEventListener('mousemove', magnetizeButton)
            areaRef.current.addEventListener('mouseleave', magnetizeButtonEnd)

            return () => {
                areaRef.current?.removeEventListener(
                    'mousemove',
                    magnetizeButton
                )
                areaRef.current?.removeEventListener(
                    'mouseleave',
                    magnetizeButtonEnd
                )
            }
        }
    }, [areaRef.current])

    const magnetizeButton = (e: MouseEvent) => {
        if (areaRef.current) {
            const boundingRect = areaRef.current.getBoundingClientRect()
            const strength = 30

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
            ref={areaRef}
            className="w-24 h-24 flex justify-center items-center rounded-full"
        >
            <m.div
                className="rounded-full"
                whileTap={{ scale: 0.9 }}
                style={{ willChange }}
                animate={{
                    x: coordinates.x,
                    y: coordinates.y,
                }}
                transition={{
                    duration: 0.1,
                    type: 'tween',
                }}
            >
                <Button href={href} onPress={onPress}>
                    {children}
                </Button>
            </m.div>
        </div>
    )
}

export default MagneticButton

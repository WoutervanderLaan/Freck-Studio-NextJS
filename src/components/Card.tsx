'use client'

import classNames from 'classnames'
import {
    motion,
    useScroll,
    useSpring,
    useVelocity,
    useTransform,
} from 'framer-motion'
import { ReactNode } from 'react'

type CardProps = {
    children: ReactNode
    backgroundColor: string
    className?: string
}

const Card = ({ children, backgroundColor, className }: CardProps) => {
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 200,
        stiffness: 1000,
    })

    const skewY = useTransform(smoothVelocity, [-3000, 3000], [-3, 3])

    return (
        <motion.div
            className={classNames(
                'flex rounded-custom min-h-[300px] flex-col items-center p-10',
                backgroundColor,
                className
            )}
            style={{
                skewY,
            }}
        >
            {children}
        </motion.div>
    )
}

export default Card

'use client'

import { MotionConfig } from 'framer-motion'
import { ReactNode } from 'react'

const ClientMotionConfig = ({ children }: { children: ReactNode }) => (
    <MotionConfig
        transition={{
            ease: [0.43, 0.13, 0.23, 0.96],
            duration: 0.5,
        }}
    >
        {children}
    </MotionConfig>
)

export default ClientMotionConfig

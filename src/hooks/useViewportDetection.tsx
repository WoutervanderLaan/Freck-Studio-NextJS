'use client'

import { useState, useEffect } from 'react'

const MOBILE_THRESHOLD = 640

const UseViewportDetection = (threshold: number = MOBILE_THRESHOLD) => {
    const [isWithinViewportThreshold, setIsWithinViewportThreshold] = useState<
        boolean | undefined
    >()

    useEffect(() => {
        const checkWidthViewport = () => {
            const viewportResolution = window.innerWidth
            setIsWithinViewportThreshold(viewportResolution < threshold)
        }

        checkWidthViewport()

        window.addEventListener('resize', checkWidthViewport, { passive: true })

        return () => window.removeEventListener('resize', checkWidthViewport)
    }, [threshold])

    return isWithinViewportThreshold
}

export default UseViewportDetection

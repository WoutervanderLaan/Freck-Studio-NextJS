'use client'

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from 'react'

type OverlayContext = {
    isContactOverlayOpen: boolean
    setIsContactOverlayOpen: Dispatch<SetStateAction<boolean>>
    isEmailOverlayOpen: boolean
    setIsEmailOverlayOpen: Dispatch<SetStateAction<boolean>>
}

export const OverlayContext = createContext<OverlayContext | null>(null)

const OverlayContextProvider = ({ children }: { children: ReactNode }) => {
    const [isContactOverlayOpen, setIsContactOverlayOpen] = useState(false)
    const [isEmailOverlayOpen, setIsEmailOverlayOpen] = useState(false)

    return (
        <OverlayContext.Provider
            value={{
                isContactOverlayOpen,
                setIsContactOverlayOpen,
                isEmailOverlayOpen,
                setIsEmailOverlayOpen,
            }}
        >
            {children}
        </OverlayContext.Provider>
    )
}

export default OverlayContextProvider

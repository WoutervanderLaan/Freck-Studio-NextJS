'use client'

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
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

export const useOverlayContext = () => {
    const overlayContext = useContext(OverlayContext)

    if (!overlayContext) throw Error('Overlay context used outside provider')

    return overlayContext
}

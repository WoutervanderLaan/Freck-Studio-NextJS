'use client'

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from 'react'

type ThemeContext = {
    isDarkMode: 'light' | 'dark'
    setIsDarkMode: Dispatch<SetStateAction<'light' | 'dark'>>
    showAvatar: boolean
    setShowAvatar: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContext | null>(null)

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState<'light' | 'dark'>('light')
    const [showAvatar, setShowAvatar] = useState(false)

    return (
        <ThemeContext.Provider
            value={{
                isDarkMode,
                setIsDarkMode,
                showAvatar,
                setShowAvatar,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider

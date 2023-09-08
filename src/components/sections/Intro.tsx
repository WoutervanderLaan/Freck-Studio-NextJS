'use client'

import Memoji from '@/components/Memoji'
import { useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'

const Intro = () => {
    const themeContext = useContext(ThemeContext)

    return (
        <section className="container flex flex-col-reverse lg:flex-row justify-between overflow-hidden">
            <div className="flex-1 flex flex-col max-h-[400px] lg:max-w-[450px] lg:mt-20 gap-10">
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-center lg:text-start">
                    We create meaningful experiences
                </h1>

                <h2 className="text-center lg:text-start">
                    We partner with global brands and emerging businesses to
                    create exciting and meaningful experiences, whether digital
                    or non-digital.
                </h2>
            </div>
            <div className="relative w-[120%] aspect-square self-center md:w-[600px] md:h-[600px] lg:self-start">
                <Memoji />
            </div>
        </section>
    )
}

export default Intro

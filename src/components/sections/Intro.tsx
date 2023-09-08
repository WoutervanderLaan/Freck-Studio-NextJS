'use client'

import Memoji from '@/components/Memoji'

const Intro = () => {
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
            <div className="relative aspect-square h-[100vw] self-center sm:h-[600px] lg:self-start">
                <Memoji />
            </div>
        </section>
    )
}

export default Intro

'use client'

import Memoji from '@/components/Memoji'
import Button from '../Button'

const Intro = () => {
    return (
        <section className="container flex flex-col-reverse justify-between items-center lg:items-start lg:flex-row">
            <div className="flex-1 flex flex-col lg:max-w-[550px] gap-10">
                <h1 className="font-serif text-2xl lg:text-3xl xl:text-4xl font-bold text-center lg:text-start">
                    We create meaningful experiences
                </h1>

                <h2 className="text-center max-w-[80%] self-center lg:self-start lg:text-start xl:text-base-variant">
                    We partner with global brands and emerging businesses to
                    create exciting and meaningful experiences, whether digital
                    or non-digital.
                </h2>
                <Button
                    onPress={() => alert('Contact')}
                    className="self-center lg:self-start"
                    ariaLabel="Contact Me"
                >
                    <span className="xl:text-base-variant">Contact Me</span>
                </Button>
            </div>
            <div className="w-full flex justify-center">
                <div className="relative aspect-square h-[100vw] scale-110 self-center overflow-hidden sm:scale-100 sm:h-[600px] lg:self-start">
                    <Memoji />
                </div>
            </div>
        </section>
    )
}

export default Intro

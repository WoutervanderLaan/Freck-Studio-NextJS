'use client'

import Memoji from '@/components/Memoji'
import Button from '../Button'

const Intro = () => (
    <section className="container flex flex-col-reverse justify-between items-center mt-[140px] md:mt-0 lg:items-start lg:flex-row lg:max-h-[600px] lg:overflow-hidden lg:mt-6">
        <div className="flex-1 flex flex-col mt-[-60px] gap-8 lg:mt-0 lg:max-w-[550px]">
            <h1 className="font-serif text-2xl lg:text-3xl xl:text-4xl font-black text-center lg:text-start">
                I am your future <br /> Best Friend
            </h1>

            <h2 className="text-center w-full self-center lg:self-start lg:text-start xl:text-base-variant lg:w-max lg:max-w-[400px] xl:max-w-[462px]">
                Freck. is a creative entity that works with branding, design &
                web. I strive for long term collaborations based on trust and
                care. Think of me as your professional BFF.
            </h2>
            <Button
                href="#contact"
                className="self-center lg:self-start"
                ariaLabel="Contact Me"
            >
                <span className="lg:text-base-variant">Contact Me</span>
            </Button>
        </div>
        <div className="w-full flex justify-center">
            <div className="relative aspect-square h-[100vw] scale-110 self-center overflow-hidden sm:scale-100 sm:h-[600px] sm:mt-6 lg:self-start">
                <Memoji />
            </div>
        </div>
    </section>
)

export default Intro

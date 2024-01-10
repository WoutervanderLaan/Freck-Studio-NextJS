'use client'

import Memoji from '@/components/Memoji'
import Button from '../Button'

const Intro = () => (
    <section className="container flex flex-col-reverse justify-between items-center mt-[140px] md:mt-0 lg:items-start lg:flex-row lg:max-h-[600px] lg:overflow-hidden lg:mt-6 lg:justify-between 2xl:max-h-[700px]">
        <div className="flex-1 flex flex-col mt-[-60px] gap-8 lg:mt-0 lg:max-w-[550px]">
            <h1 className="font-serif text-2xl font-black text-center lg:text-3xl xl:text-4xl  lg:text-start">
                I am your future <br className="hidden lg:block" /> Best Friend
            </h1>

            <h2 className="text-base-variant text-center w-full self-center lg:self-start lg:text-start xl:text-base-v2 lg:w-max lg:max-w-[400px] xl:max-w-full">
                Freck. is a creative studio that works with branding, design &
                web. I strive for long-term collaborations founded on trust and
                care.
            </h2>
            <Button
                href="#contact"
                className="self-center lg:self-start xl:mt-2"
                ariaLabel="Contact Me"
            >
                <span className="text-base-variant lg:text-base-v2">
                    Contact Me
                </span>
            </Button>
        </div>
        <div className="w-full flex justify-center lg:max-w-[550px] 2xl:max-w-[700px] 2xl:mr-20">
            <div className="relative aspect-square h-[100vw] scale-110 self-center overflow-hidden sm:scale-100 sm:h-[600px] sm:mt-6 lg:self-start 2xl:h-[700px] 2xl:mt-0">
                <Memoji />
            </div>
        </div>
    </section>
)

export default Intro

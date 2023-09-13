'use client'

import Testimonial from '../Testimonial'
import UseViewportDetection from '@/hooks/useViewportDetection'
import portrait from '../../../public/img/42295258_1908080579281083_4492696045435748352_o.jpg'
import Button from '../Button'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const testimonials = [
    {
        backgroundColor: 'bg-black dark:bg-dark-quarternary-bg',
        textColor: 'text-orange-500 dark:text-white',
        name: 'Wouter van der Laan',
        position: 'CEO Ciri empire',
        company: 'Canvasheroes',
        image: portrait,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
    {
        backgroundColor: 'bg-purple dark:bg-dark-secondary-bg',
        textColor: 'text-emerald-400',
        name: 'Wouter van der Laan',
        position: 'CEO Ciri empire',
        company: 'Canvasheroes',
        image: portrait,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
    {
        name: 'Wouter van der Laan',
        position: 'CEO Ciri empire',
        company: 'Canvasheroes',
        image: portrait,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
    {
        backgroundColor: 'bg-black dark:bg-dark-quarternary-bg',
        textColor: 'text-orange-500 dark:text-white',
        name: 'Wouter van der Laan',
        position: 'CEO Ciri empire',
        company: 'Canvasheroes',
        image: portrait,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
    {
        backgroundColor: 'bg-purple dark:bg-dark-secondary-bg',
        textColor: 'text-emerald-400',
        name: 'Wouter van der Laan',
        position: 'CEO Ciri empire',
        company: 'Canvasheroes',
        image: portrait,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
]

const Testimonials = () => {
    const isTablet = UseViewportDetection(768)
    const isDesktop = UseViewportDetection(1240)
    const containerRef = useRef<HTMLDivElement>(null)
    const [startValue, setStartValue] = useState(0)

    const [testimonialWidth, setTestimonialWidth] = useState(0)

    const TESTIMONIALS_PER_PAGE = isTablet ? 1 : isDesktop ? 2 : 3
    const ENDING_INDEX = isTablet
        ? testimonials.length - 1
        : isDesktop
        ? testimonials.length - 2
        : testimonials.length - 3
    const GAP = 40

    useEffect(() => {
        if (containerRef.current) {
            setTestimonialWidth(
                containerRef.current?.getBoundingClientRect().width /
                    TESTIMONIALS_PER_PAGE -
                    (isTablet ? GAP / 2 : GAP)
            )
        }
    }, [containerRef.current])

    return (
        <section className="w-full relative flex flex-col items-center px-4 overflow-x-hidden">
            {/* <div className="flex flex-row gap-2 mt-4 mb-8">
                {testimonials.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-2 rounded-full bg-purple"
                        animate={{
                            opacity: index === startValue ? 1 : 0.5,
                            scale: index === startValue ? 1.3 : 1,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    />
                ))}
            </div> */}
            <div
                ref={containerRef}
                className="container relative px-5 flex flex-row h-[560px] relative overflow-x-hidden"
            >
                {containerRef.current &&
                    testimonials.map((testimonial, index) => {
                        return (
                            <motion.div
                                key={index}
                                transition={{
                                    type: 'tween',
                                    duration: 0.2,
                                }}
                                className="absolute"
                                style={{
                                    height: '100%',
                                    width: testimonialWidth,
                                }}
                                animate={{
                                    x:
                                        (testimonialWidth + GAP) * index -
                                        startValue * (testimonialWidth + GAP),
                                }}
                            >
                                <Testimonial key={index} {...testimonial} />
                            </motion.div>
                        )
                    })}
            </div>
            <div className="flex flex-row gap-4">
                <Button
                    className=""
                    onPress={() =>
                        setStartValue((prevValue) => {
                            return prevValue === 0
                                ? ENDING_INDEX
                                : prevValue - 1
                        })
                    }
                >
                    -
                </Button>
                <Button
                    className=""
                    onPress={() =>
                        setStartValue((prevValue) => {
                            return prevValue === ENDING_INDEX
                                ? 0
                                : prevValue + 1
                        })
                    }
                >
                    +
                </Button>
            </div>
        </section>
    )
}

export default Testimonials

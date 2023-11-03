'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Tag from '../Tag'
import Card from '../Card'
import Button from '../Button'
import cursor from '../../../public/img/3d-cursor.png'

const designServices = [
    '3D assets',
    'Branding',
    'Graphic Design',
    'Icons',
    'Motion',
    'Print',
    'illustrations',
    'UI Kits',
    'Social Media',
    'Web Development',
]

type Coordinate = { x: number; y: number }

const Services = () => {
    const tagContainer = useRef<HTMLDivElement | null>(null)
    const [tagPositions, setTagPositions] = useState<Coordinate[]>([])
    const [cursorIndex, setCursorIndex] = useState(0)
    const [XY, setXY] = useState<Coordinate | null>(null)

    const calcTagPositions = () => {
        if (tagContainer.current) {
            const childDivs =
                tagContainer.current.querySelectorAll('[data-name="tag"]')
            const tempArray: Coordinate[] = []

            const containerDimensions = {
                x: tagContainer.current.getBoundingClientRect().x,
                y: tagContainer.current.getBoundingClientRect().y,
            }

            Array.prototype.forEach.call(childDivs, (div) => {
                const divWidth = div.getBoundingClientRect().width

                tempArray.push({
                    x:
                        div.getBoundingClientRect().x -
                        containerDimensions.x +
                        divWidth / 2,
                    y: div.getBoundingClientRect().y - containerDimensions.y,
                })
            })

            setTagPositions(tempArray)
        }
    }

    useEffect(() => {
        if (tagContainer.current) calcTagPositions()
    }, [tagContainer.current])

    useEffect(() => {
        window.addEventListener('resize', calcTagPositions)
        return () => window.removeEventListener('resize', calcTagPositions)
    })

    useEffect(() => {
        setXY({
            x: tagPositions[cursorIndex]?.x,
            y: tagPositions[cursorIndex]?.y,
        })
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * tagPositions.length)
            setCursorIndex(randomIndex)
        }, 2000)

        return () => clearInterval(interval)
    }, [cursorIndex, tagPositions])

    return (
        <motion.section
            id="services"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="container scroll-my-20"
        >
            <Card
                backgroundColor="bg-gray"
                className="flex flex-col gap-12 justify-between lg:px-20"
            >
                <div className="text-center flex flex-col gap-6 items-center">
                    <h3 className="font-medium font-serif w-full text-lg-variant md:text-xl lg:text-3xl">
                        Services for your business
                    </h3>
                    <p className="max-w-[640px] md:text-base-variant">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                    </p>
                </div>
                <div
                    ref={tagContainer}
                    className="relative flex flex-row flex-wrap gap-3 justify-center md:gap-5"
                >
                    {XY && (
                        <motion.div
                            className="left-0 top-0 absolute z-30"
                            animate={XY}
                        >
                            <div className="bg-blue w-10 h-10 rounded-full border-2 border-black shadow-lg flex justify-center">
                                <span>{cursorIndex}</span>
                            </div>
                        </motion.div>
                    )}
                    {designServices.map((tag, index) => (
                        <Tag
                            key={index}
                            note={
                                index === designServices.length - 1
                                    ? '(new)'
                                    : ''
                            }
                            hovered={cursorIndex === index}
                        >
                            {tag}
                        </Tag>
                    ))}
                </div>
                <Button variant="black" href="#contact" className="md:mt-10">
                    <span className="lg:text-base-variant">Contact Me</span>
                </Button>
            </Card>
        </motion.section>
    )
}

export default Services

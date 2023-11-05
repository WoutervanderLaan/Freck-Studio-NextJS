'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Tag from '../Tag'
import Card from '../Card'
import Button from '../Button'
import cursor from '../../../public/img/3Dcursor.png'

const designServices = [
    '3D assets',
    'Branding',
    'Digital Design',
    'Motion',
    'Print Design',
    'Illustrations',
    'UX/UI',
    'Social Media',
    'Iconography',
    'Logo Design',
    'Web Development',
]

type Coordinate = { x: number; y: number }

const Services = () => {
    const tagContainer = useRef<HTMLDivElement | null>(null)
    const [tagPositions, setTagPositions] = useState<Coordinate[]>([])
    const [cursorIndex, setCursorIndex] = useState(0)

    const XY = {
        x: tagPositions[cursorIndex]?.x,
        y: tagPositions[cursorIndex]?.y,
    }

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
        if (tagContainer.current) setTimeout(() => calcTagPositions(), 400)
    }, [tagContainer])

    useEffect(() => {
        window.addEventListener('resize', calcTagPositions)
        return () => window.removeEventListener('resize', calcTagPositions)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * tagPositions.length)
            setCursorIndex(randomIndex)
        }, 1500)

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
                    <p className="max-w-[640px] md:text-base-v2">
                        I create high-quality content that captures the essence
                        of your brand, accompanied by breathtaking designs that
                        will leave your competitors wanting to connect.
                    </p>
                </div>
                <div
                    ref={tagContainer}
                    className="relative flex flex-row flex-wrap gap-3 justify-center md:gap-5 xl:px-20"
                >
                    {XY && tagPositions.length > 0 && (
                        <motion.div
                            className="left-0 top-0 absolute z-10"
                            animate={XY}
                            transition={{
                                duration: 0.4,
                            }}
                        >
                            <Image
                                src={cursor}
                                alt="3D image of cursor"
                                width={100}
                                height={100}
                                className="translate-y-0"
                            />
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
                    <span className="lg:text-base-v2">Contact Me</span>
                </Button>
            </Card>
        </motion.section>
    )
}

export default Services

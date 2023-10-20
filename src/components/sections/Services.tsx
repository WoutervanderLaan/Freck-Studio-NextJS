'use client'

import { motion } from 'framer-motion'
import Tag from '../Tag'
import Card from '../Card'
import Button from '../Button'

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

const Services = () => (
    <motion.section
        id="services"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="container scroll-my-20"
    >
        <Card
            backgroundColor="bg-gray"
            className="flex flex-col gap-12 lg:px-20"
        >
            <div className="text-center flex flex-col gap-6 items-center">
                <h3 className="font-medium font-serif w-full text-lg-variant md:text-xl lg:text-3xl">
                    Services for your business
                </h3>
                <p className="max-w-[640px] md:text-base-variant">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                </p>
            </div>
            <div className="flex flex-row flex-wrap gap-3 justify-center md:gap-5">
                {designServices.map((tag, index) => (
                    <Tag
                        key={index}
                        note={
                            index === designServices.length - 1 ? '(new)' : ''
                        }
                    >
                        {tag}
                    </Tag>
                ))}
            </div>
            <Button href="#contact" className="md:m-10">
                <span className="lg:text-base-variant">Contact Me</span>
            </Button>
        </Card>
    </motion.section>
)

export default Services

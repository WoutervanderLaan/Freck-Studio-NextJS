'use client'

import Image from 'next/image'
import Card from '../Card'
import deskImage from '../../../public/img/Desk.png'
import TextBalloons from '../TextBalloons'

const WhoCard = () => (
    <Card
        backgroundColor="bg-dark-secondary-bg"
        className="relative text-center"
    >
        <h2 className="text-blue font-serif font-medium text-2xl lg:text-4xl lg:mt-10">
            <span className="italic font-thin">Everyone</span> is an artist
        </h2>
        <p className="text-blue text-center text-base mt-8 md:max-w-[70%] lg:max-w-[50%] lg:text-base-variant lg:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
        <div className="relative bottom-[-40px] w-full mt-[-30px] md:mt-[-50px] lg:mt-[-90px]">
            <TextBalloons />
            <Image
                loading="lazy"
                quality={100}
                draggable={false}
                src={deskImage}
                alt="Image of work table containing several personal and work related items"
                className="aspect-video"
            />
        </div>
    </Card>
)

export default WhoCard

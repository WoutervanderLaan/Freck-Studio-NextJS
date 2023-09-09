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
        <h2 className="text-blue font-serif font-medium text-2xl  lg:text-4xl lg:mt-10">
            <span className="italic font-normal">Everyone</span> is an artist
        </h2>
        <p className="text-blue text-center  max-w-[60%] text-base mt-8 lg:text-lg lg:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
        <div className="relative bottom-[-40px] w-full mt-[-50px] lg:mt-[-90px]">
            <TextBalloons />
            <Image
                loading="lazy"
                draggable={false}
                src={deskImage}
                alt="Image of work table containing several personal and work related items"
                className="aspect-video"
            />
        </div>
    </Card>
)

export default WhoCard

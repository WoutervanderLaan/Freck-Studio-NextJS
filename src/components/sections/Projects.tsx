'use client'

import { useState } from 'react'
import Card from '../Card'
import ProjectItem from '../ProjectItem'
import BA_Macaron from '../../../public/img/BA_Macaron.png'
import Hostens from '../../../public/img/hostens-small.png'
import { MotionSection } from '../MotionElement'

export type HoverValues = {
    BA: boolean
    IV: boolean
    HO: boolean
    SW: boolean
}

export const defaultState = {
    BA: true,
    IV: true,
    HO: true,
    SW: true,
}

const Projects = () => {
    const [isHovered, setIsHovered] = useState<HoverValues>(defaultState)

    return (
        <MotionSection
            id="projects"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="container scroll-my-20"
        >
            <Card
                backgroundColor="bg-dark-bg dark:bg-dark-primary-bg text-orange"
                className="relative w-full h-fit flex flex-col gap-10 md:gap-14 py-20"
            >
                <ProjectItem
                    href="/ba"
                    id="BA"
                    projectName="Baltic Amadeus"
                    setIsHovered={setIsHovered}
                    isHovered={isHovered}
                    img={BA_Macaron}
                    imgAlt="3D rendered bracket symbol"
                />
                <ProjectItem
                    href="/hostens"
                    id="HO"
                    projectName="Hostens"
                    setIsHovered={setIsHovered}
                    isHovered={isHovered}
                    img={Hostens}
                    imgAlt="3D rendered bracket symbol"
                />
                <ProjectItem
                    href="/iv"
                    id="IV"
                    projectName="Interneto Vizija"
                    setIsHovered={setIsHovered}
                    isHovered={isHovered}
                    img={BA_Macaron}
                    imgAlt="3D rendered bracket symbol"
                />
                <ProjectItem
                    href="/swedbank"
                    id="SW"
                    projectName="Swedbank"
                    setIsHovered={setIsHovered}
                    isHovered={isHovered}
                    img={Hostens}
                    imgAlt="3D rendered bracket symbol"
                />
            </Card>
        </MotionSection>
    )
}

export default Projects

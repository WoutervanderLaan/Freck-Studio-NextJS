'use client'

import { useState } from 'react'
import Card from '../Card'
import ProjectItem from '../ProjectItem'

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
        <section id="projects" className="container scroll-my-20">
            <Card
                backgroundColor="bg-dark-bg dark:bg-dark-primary-bg text-orange"
                className="w-full h-fit flex flex-col gap-10 md:gap-14 py-20"
            >
                <ProjectItem
                    href="/"
                    id="BA"
                    projectName="Baltic Amadeus"
                    setIsHovered={setIsHovered}
                    isHovered={isHovered.BA}
                />
                <ProjectItem
                    href="/"
                    id="IV"
                    projectName="Interneto Vizija"
                    setIsHovered={setIsHovered}
                    isHovered={isHovered.IV}
                />
                <ProjectItem
                    href="/"
                    id="HO"
                    projectName="Hostens"
                    setIsHovered={setIsHovered}
                    isHovered={isHovered.HO}
                />
                <ProjectItem
                    href="/"
                    id="SW"
                    projectName="Swedbank"
                    setIsHovered={setIsHovered}
                    isHovered={isHovered.SW}
                />
            </Card>
        </section>
    )
}

export default Projects

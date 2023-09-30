'use client'

import { SetStateAction, Dispatch } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import AriaLink from './AriaLink'
import { HoverValues, defaultState } from './sections/Projects'

type ProjectItemProps = {
    href: string
    id: string
    projectName: string
    setIsHovered: Dispatch<SetStateAction<HoverValues>>
    isHovered: boolean
}

const allOff = {
    BA: false,
    IV: false,
    HO: false,
    SW: false,
}

const ProjectItem = ({
    href = '/',
    id,
    projectName,
    setIsHovered,
    isHovered,
}: ProjectItemProps) => {
    return (
        <motion.div
            onHoverStart={() =>
                setIsHovered(() => ({
                    ...allOff,
                    [id]: true,
                }))
            }
            onHoverEnd={() => setIsHovered(() => defaultState)}
            className="active:scale-90 transition"
        >
            <AriaLink
                href={href}
                className={classNames({ 'opacity-50': !isHovered })}
            >
                <h3 className="font-medium font-serif text-lg-variant w-full max-[360px]:text-lg min-[480px]:text-2xl lg:text-3xl">
                    {projectName}
                </h3>
            </AriaLink>
        </motion.div>
    )
}

export default ProjectItem

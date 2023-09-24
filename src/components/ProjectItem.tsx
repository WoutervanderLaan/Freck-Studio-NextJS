'use client'

import { SetStateAction, Dispatch } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import AriaLink from './AriaLink'
import { HoverValues } from './sections/Projects'

type ProjectItemProps = {
    href: string
    id: string
    projectName: string
    setIsHovered: Dispatch<SetStateAction<HoverValues>>
    isHovered: boolean
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
                setIsHovered((prevValue) => ({ ...prevValue, [id]: true }))
            }
            onHoverEnd={() =>
                setIsHovered((prevValue) => ({ ...prevValue, [id]: false }))
            }
            className="active:scale-90 transition"
        >
            <AriaLink
                href={href}
                className={classNames({ 'opacity-50': !isHovered })}
            >
                <h3 className="font-medium font-serif text-lg min-[480px]:text-2xl lg:text-3xl">
                    {projectName}
                </h3>
            </AriaLink>
        </motion.div>
    )
}

export default ProjectItem

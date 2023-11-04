'use client'

import { SetStateAction, Dispatch } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import classNames from 'classnames'
import AriaLink from './AriaLink'
import { HoverValues, defaultState } from './sections/Projects'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type ProjectItemProps = {
    href: string
    id: keyof HoverValues
    projectName: string
    setIsHovered: Dispatch<SetStateAction<HoverValues>>
    isHovered: HoverValues
    img: StaticImport
    imgAlt?: string
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
    img,
    imgAlt,
}: ProjectItemProps) => (
    <motion.div
        onHoverStart={() =>
            setIsHovered(() => ({
                ...allOff,
                [id]: true,
            }))
        }
        onHoverEnd={() => setIsHovered(() => defaultState)}
        className={classNames(
            'relative flex active:scale-90 transition min-w-fit',
            {
                'opacity-50': !isHovered[id],
            }
        )}
    >
        <AriaLink
            href={href}
            aria-label={`Press to go to case study of ${projectName}`}
            target="_self"
        >
            <h3 className="font-medium font-serif text-lg-variant max-[360px]:text-lg min-[480px]:text-2xl lg:text-3xl">
                {projectName}
            </h3>
        </AriaLink>
        <AnimatePresence>
            {isHovered[id] && Object.values(isHovered).includes(false) && (
                <motion.div
                    key="projectImage"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                        type: 'spring',
                        duration: 0.3,
                        delay: 0.1,
                    }}
                    className="absolute -top-[50%] -right-20"
                >
                    <Image src={img} alt={imgAlt || ''} height={100} />
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
)

export default ProjectItem

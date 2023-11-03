import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const tagVariants = {
    default: { backgroundColor: '#ffffff', color: '#000000' },
    hovered: {
        backgroundColor: '#000000',
        color: '#ffffff',
        transition: { delay: 0.2 },
    },
}

const Tag = ({
    children,
    note,
    hovered,
}: {
    children: ReactNode
    note?: string
    hovered?: boolean
}) => (
    <motion.div
        className="rounded-custom py-3 text-center px-6 text-base sm:text-lg"
        data-name="tag"
        variants={tagVariants}
        initial={{ backgroundColor: '#ffffff' }}
        animate={hovered ? 'hovered' : 'default'}
    >
        {children} {note && <span className="opacity-50">{note}</span>}
    </motion.div>
)

export default Tag

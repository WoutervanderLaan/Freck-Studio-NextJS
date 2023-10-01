import { motion } from 'framer-motion'

const path1variants = {
    open: {
        y: [28, 28, 28, 0],
        rotate: ['45deg', '0deg', '0deg', '0deg'],
    },
    cross: {
        y: [0, 28, 28, 28],
        rotate: ['0deg', '0deg', '0deg', '45deg'],
    },
}

const path2variants = {
    open: {
        opacity: [0, 0, 0, 1],
    },
    cross: {
        opacity: [1, 0, 0, 0],
    },
}

const path3variants = {
    open: {
        y: [-28, -28, -28, 0],
        rotate: ['-45deg', '0deg', '0deg', '0deg'],
    },
    cross: {
        y: [0, -28, -28, -28],
        rotate: ['0deg', '0deg', '0deg', '-45deg'],
    },
}

const Hamburger = ({
    isOpen = false,
    dark = false,
}: {
    isOpen?: boolean
    dark?: boolean
}) => (
    <motion.svg
        initial={{
            viewBox: '0 0 98 66',
            strokeWidth: 9,
            stroke: dark ? 'white' : 'black',
        }}
        animate={
            isOpen
                ? {
                      viewBox: '0 -5 98 76',
                      strokeWidth: 10,
                      stroke: 'white',
                  }
                : {
                      viewBox: '0 0 98 66',
                      strokeWidth: 9,
                      stroke: dark ? 'white' : 'black',
                  }
        }
        width={24}
        height={16}
        viewBox="0 0 98 66"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={path1variants}
            initial={isOpen ? 'open' : 'cross'}
            animate={isOpen ? 'cross' : 'open'}
            transition={{
                ease: 'linear',
                duration: 0.2,
            }}
            d="M4.85001 4.58997H93.15"
            strokeMiterlimit="10"
            strokeLinecap="round"
        />
        <motion.path
            variants={path2variants}
            initial={isOpen ? 'open' : 'cross'}
            animate={isOpen ? 'cross' : 'open'}
            transition={{
                ease: 'linear',
                duration: 0.2,
            }}
            d="M4.85001 33H93.15"
            strokeMiterlimit="10"
            strokeLinecap="round"
        />
        <motion.path
            variants={path3variants}
            initial={isOpen ? 'open' : 'cross'}
            animate={isOpen ? 'cross' : 'open'}
            transition={{
                ease: 'linear',
                duration: 0.2,
            }}
            d="M4.85001 61.41H93.15"
            strokeMiterlimit="10"
            strokeLinecap="round"
        />
    </motion.svg>
)

export default Hamburger

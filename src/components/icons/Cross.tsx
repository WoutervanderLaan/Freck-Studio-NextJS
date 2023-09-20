import { motion } from 'framer-motion'

const crossVariants = {
    closed: {
        pathLength: 0,
    },
    open: {
        pathLength: 1,
    },
}
const Cross = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 346 335"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-blue"
    >
        <path
            d="M220.254 119.946L125.746 214.424"
            stroke-width="25.5"
            stroke-miterlimit="10"
            stroke-linecap="square"
        />
        <path
            d="M125.746 119.946L220.254 214.424"
            stroke-width="25.5"
            stroke-miterlimit="10"
            stroke-linecap="square"
        />
        <motion.path
            d="M333.5 167.5C333.5 252.727 262.025 322.5 173 322.5C83.9745 322.5 12.5 252.727 12.5 167.5C12.5 82.2735 83.9745 12.5 173 12.5C262.025 12.5 333.5 82.2735 333.5 167.5Z"
            stroke-width="25"
            fill="none"
            variants={crossVariants}
            initial={'closed'}
            animate={'open'}
            transition={{
                duration: 0.2,
                delay: 0.2,
            }}
        />
    </svg>
)

export default Cross

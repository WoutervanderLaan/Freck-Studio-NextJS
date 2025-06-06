import { motion } from 'framer-motion'

const Logo = ({ fill = 'black' }: { fill?: string }) => (
    <motion.svg
        height={35}
        width={110}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 230"
        className="dark:fill-white"
        animate={{
            fill: fill,
            transition: {
                delay: 0.2,
            },
        }}
    >
        <path d="m28.86,216.52H0V71.74C0,48.15,6.37,30.3,19.13,18.18,31.88,6.06,50.69,0,75.54,0h38.91v24.96h-38.58c-16.43,0-28.37,3.97-35.83,11.89-7.46,7.92-11.19,20.67-11.19,38.25v23.44h85.6v24.96H28.86v93.03Z" />
        <path d="m169.89,216.52h-25.94V69.36h25.94v25.93c10.16-19.45,26.15-29.17,47.99-29.17h9.73v24.42h-5.19c-18.16,0-31.45,4.78-39.88,14.32-8.43,9.55-12.64,24.52-12.64,44.92v66.74Z" />
        <path d="m363.14,148.45l18.15,10.05c-11.89,40.63-37.29,60.94-76.19,60.94-21.19,0-39.29-7.4-54.31-22.2-15.03-14.8-22.53-32.9-22.53-54.29s7.35-39.76,22.05-54.46c14.7-14.69,32.96-22.04,54.79-22.04,28.96,0,51.66,14.59,68.09,43.76l-94.35,61.59-11.03-19.13,71.67-47.94c-8.22-9.96-19.67-14.94-34.37-14.94s-26.16,4.86-35.67,14.59c-9.51,9.72-14.27,22.04-14.27,36.95s5.19,27.77,15.56,38.57c10.38,10.81,22.8,16.21,37.29,16.21,13.62,0,25.18-4.1,34.7-12.32,9.51-8.21,16.32-19.99,20.43-35.33Z" />
        <path d="m491.52,193.51v23.01h-19.13c-14.27,0-25.89-1.62-34.85-4.86-8.97-3.24-18.86-10.48-29.67-21.72-10.81-11.23-16.21-27.01-16.21-47.32,0-10.59,2.48-21.12,7.46-31.6,4.97-10.48,12.81-20.04,23.51-28.69,10.7-8.64,26.53-12.97,47.5-12.97h21.4v22.69h-15.24c-17.73,0-31.77,4.65-42.15,13.94-10.38,9.29-15.56,21.83-15.56,37.6s5.08,27.77,15.24,36.63c10.16,8.86,24.1,13.29,41.82,13.29h15.89Z" />
        <path d="m636.13,216.52h-25.94v-31.77c0-13.4-2.97-22.85-8.92-28.36-5.95-5.51-16.05-8.26-30.32-8.26h-24.64v68.39h-25.94V0h25.94v125.44h13.63c8.22,0,14.21-1.18,18-3.56s8.17-7.88,13.14-16.52l21.18-35.92,28.41-.08-24.32,40.52c-4.97,8.22-8.38,13.35-10.21,15.4-1.84,2.06-5.14,4.27-9.89,6.65,26.59,6.05,39.88,23.34,39.88,51.86v32.74Z" />
        <motion.path
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 0.5, 1, 1, 1, 1],
                scale: [0, 0.4, 0.8, 1.2, 1.4, 1],
            }}
            transition={{
                delay: 0.5,
                duration: 0.2,
            }}
            d="m681.2,181.84c5.19,0,9.62,1.84,13.29,5.51,3.67,3.68,5.51,8.1,5.51,13.29s-1.84,9.62-5.51,13.29c-3.68,3.67-8.11,5.51-13.29,5.51s-9.62-1.84-13.29-5.51c-3.68-3.67-5.51-8.1-5.51-13.29s1.83-9.61,5.51-13.29c3.67-3.67,8.11-5.51,13.29-5.51Z"
        />
    </motion.svg>
)

export default Logo

import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type TextBalloonsProps = {
    debug?: boolean
}

const TextBalloons = ({ debug = false }: TextBalloonsProps) => {
    return (
        <>
            <TextBalloon
                left={25}
                bottom={26}
                width={10}
                height={27}
                debug={debug}
                title="Lucky Cat"
                body="This cat brings me luck in business!"
            />

            <TextBalloon
                left={20}
                bottom={21}
                width={7}
                height={5}
                debug={debug}
                title="Vampire Teeth"
                body="I love horror and I am often called a vampire because of my
                pale skin."
            />
            <TextBalloon
                left={6}
                bottom={21}
                width={10}
                height={22}
                debug={debug}
                title="Yoga Mat"
                body="It is important to stay zen during and after work."
            />

            <TextBalloon
                left={68}
                bottom={19}
                width={10}
                height={15}
                debug={debug}
                title="Le Creuset Mug"
                body="Coffee is an important part of my workflow. And Le Creuset
                makes the best mugs."
            />

            <TextBalloon
                left={79}
                bottom={23}
                width={8}
                height={14}
                debug={debug}
                title="Apple Homepod"
                body="Siri doesn't always listen, but I couldn't do my work
                without my favourite music."
            />

            <TextBalloon
                left={78}
                bottom={15}
                width={14}
                height={8}
                debug={debug}
                title="Tony's Chocolonely's"
                body="The best and most responsible cholocate ever."
            />
        </>
    )
}

export default TextBalloons

type TextBalloonProps = {
    title: string
    body: string
    width: number
    height: number
    left: number
    bottom: number
    debug?: boolean
}

const TextBalloon = ({
    title,
    body,
    width,
    height,
    left,
    bottom,
    debug,
}: TextBalloonProps) => {
    const divRef = useRef<HTMLDivElement>(null)
    const balloonRef = useRef<HTMLDivElement>(null)
    const [showBalloon, setShowBalloon] = useState(false)

    useEffect(() => {
        divRef.current?.addEventListener('mouseenter', () =>
            setShowBalloon(true)
        )
        divRef.current?.addEventListener('mouseleave', () =>
            setShowBalloon(false)
        )
        return () => {
            divRef.current?.removeEventListener('mouseenter', () =>
                setShowBalloon(true)
            )
            divRef.current?.removeEventListener('mouseleave', () =>
                setShowBalloon(false)
            )
        }
    }, [])

    return (
        <>
            <div
                ref={divRef}
                className={classNames('absolute z-50', {
                    'border-2 border-dashed border-pink': debug,
                })}
                style={{
                    left: left + '%',
                    bottom: bottom + '%',
                    height: height + '%',
                    width: width + '%',
                }}
            />
            <AnimatePresence>
                {showBalloon && (
                    <motion.div
                        key={'balloon'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.2,
                        }}
                        style={{
                            left: left + width / 2 + '%',
                            bottom: bottom + height + 5 + '%',
                        }}
                        ref={balloonRef}
                        className="absolute bg-white rounded-custom flex items-center justify-center p-4 w-[40%] translate-x-[-50%] lg:w-[26%] lg:p-6 dark:bg-dark-bg lg:translate-x-[-52%]"
                    >
                        <div className="z-10 text-center flex flex-col gap-2 md:gap-4">
                            <p className="font-bold text-sm lg:text-lg">
                                {title}
                            </p>
                            <p className="text-xs lg:text-base">{body}</p>
                        </div>
                        <div
                            className="absolute bg-white aspect-square h-[10px] bottom-[-5px] translate-x-[-5px] rotate-45 z-0 dark:bg-dark-bg lg:h-[30px] lg:bottom-[-15px] lg:translate-x-[-15px]"
                            style={{
                                left: '50%',
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

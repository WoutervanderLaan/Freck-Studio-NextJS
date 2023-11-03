import { useContext } from 'react'
import { FocusScope } from 'react-aria'
import { AnimatePresence, motion } from 'framer-motion'
import { OverlayContext } from '@/contexts/OverlayContext'
import AriaLink from './AriaLink'
import Button from './Button'
import Cross from './icons/Cross'

const EmailOverlay = () => {
    const overlayContext = useContext(OverlayContext)

    return (
        <AnimatePresence>
            {overlayContext?.isEmailOverlayOpen && (
                <motion.div
                    className="w-screen h-screen fixed top-0 flex flex-col justify-center items-center bg-black/50 z-20"
                    key="contactForm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <FocusScope contain autoFocus restoreFocus>
                        <div className="relative bg-purple dark:bg-dark-secondary-bg text-blue flex flex-col items-center justify-center pointer-events-auto min-w-fit w-[60%] max-w-[800px] px-8 md:px-16 rounded-custom z-20 md:w-[40%] h-[160px] md:min-h-[200px]">
                            <AriaLink
                                href="mailto:saruunep@gmail.com"
                                aria-label="Press to send email"
                                target="_parent"
                            >
                                <h3 className="text-lg md:text-2xl font-serif transition hover:scale-[105%]">
                                    Saruunep@gmail.com
                                </h3>
                            </AriaLink>
                            <Button
                                variant="ghost"
                                onPress={() =>
                                    overlayContext?.setIsEmailOverlayOpen(false)
                                }
                                className="absolute top-2 right-2 opacity-75 hover:opacity-100 hover:bg-blue/25"
                                icon={<Cross strokeColor="stroke-blue" />}
                            />
                        </div>
                    </FocusScope>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default EmailOverlay

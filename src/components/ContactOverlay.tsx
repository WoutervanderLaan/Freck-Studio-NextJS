import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FocusScope } from 'react-aria'
import { useContext, useEffect } from 'react'
import { OverlayContext } from '@/contexts/OverlayContext'
import ContactForm from './forms/contactForm'
import clockCat from '@/../public/img/ClockCat.png'
import Card from './Card'
import Button from './Button'
import Cross from './icons/Cross'

const ContactOverlay = () => {
    const overlayContext = useContext(OverlayContext)

    useEffect(() => {
        if (overlayContext?.isContactOverlayOpen) {
            document.body.classList.add('pointer-events-none')
        }
        if (!overlayContext?.isContactOverlayOpen) {
            document.body.classList.remove('pointer-events-none')
        }
    }, [overlayContext?.isContactOverlayOpen])

    return (
        <AnimatePresence>
            {overlayContext?.isContactOverlayOpen && (
                <motion.div
                    key="contactOverlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-0 h-screen w-full bg-black/50 z-20 flex flex-col items-center justify-center pointer-events-auto"
                >
                    <FocusScope contain autoFocus restoreFocus>
                        <Card
                            backgroundColor="bg-blue dark:bg-dark-secondary-bg"
                            className="relative text-purple flex flex-col items-center justify-center rounded-custom mt-20"
                            skew={false}
                        >
                            <motion.div
                                className="absolute -z-10"
                                initial={{
                                    top: -80,
                                }}
                                animate={{
                                    top: -215,
                                }}
                                transition={{
                                    duration: 2,
                                    delay: 1,
                                }}
                            >
                                <Image
                                    src={clockCat}
                                    width={400}
                                    className="aspect-auto"
                                    alt="3D cat holding a clock"
                                />
                            </motion.div>
                            <div className="flex flex-col gap-10 px-14 max-w-[600px]">
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-serif text-2xl font-bold">
                                        How can I Help?
                                    </h3>
                                    <p className="font-medium text-base">
                                        Digital queries? We'd love to hear them!
                                        Fill in your details and we'll get back
                                        to you as soon as possible.
                                    </p>
                                </div>
                                <ContactForm />
                            </div>
                            <Button
                                variant="ghost"
                                onPress={() =>
                                    overlayContext?.setIsContactOverlayOpen(
                                        false
                                    )
                                }
                                className="absolute top-2 right-2 opacity-75 hover:opacity-100 hover:bg-white/25"
                                icon={<Cross strokeColor="stroke-purple" />}
                            />
                        </Card>
                    </FocusScope>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ContactOverlay

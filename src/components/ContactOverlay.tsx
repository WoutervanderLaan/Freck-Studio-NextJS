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
import Logo from './Logo'

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
                    className="fixed top-0 left-0 h-[100dvh] overflow-auto w-full bg-blue z-20 flex flex-col md:bg-black/50 md:items-center md:justify-center pointer-events-auto"
                >
                    <FocusScope contain autoFocus={false} restoreFocus>
                        <Card
                            backgroundColor="bg-tranparent md:bg-blue"
                            className="relative text-purple h-max w-full rounded-none md:flex md:flex-col md:items-center md:justify-center md:w-fit md:h-fit md:rounded-custom"
                            skew={false}
                        >
                            <div className="absolute w-fit left-4 top-4 md:hidden">
                                <Logo fill="#4900A5" />
                            </div>

                            <div className="flex flex-col gap-10 max-w-[600px] py-10 md:py-0 sm:px-14">
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-serif font-bold text-lg-variant md:text-2xl ">
                                        How can I Help?
                                    </h3>
                                    <p className="font-medium text-base">
                                        Digital queries? We&apos;d love to hear
                                        them! Fill in your details and
                                        we&apos;ll get back to you as soon as
                                        possible.
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

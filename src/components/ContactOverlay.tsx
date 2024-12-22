import { AnimatePresence } from 'framer-motion'
import { FocusScope } from 'react-aria'
import { useEffect } from 'react'
import { useOverlayContext } from '@/contexts/OverlayContext'
import ContactForm from './forms/contactForm'
import Card from './Card'
import Button from './Button'
import Cross from './icons/Cross'
import Logo from './Logo'
import { MotionDiv } from './MotionElement'

const ContactOverlay = () => {
    const { isContactOverlayOpen, setIsContactOverlayOpen } =
        useOverlayContext()

    useEffect(() => {
        if (isContactOverlayOpen) {
            document.body.classList.add('pointer-events-none')
        }
        if (!isContactOverlayOpen) {
            document.body.classList.remove('pointer-events-none')
        }
    }, [isContactOverlayOpen])

    return (
        <AnimatePresence>
            {isContactOverlayOpen && (
                <MotionDiv
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
                                    <h3 className="font-serif font-medium text-lg-variant md:text-2xl">
                                        How can I Help?
                                    </h3>
                                    <p className="text-base-variant md:text-base-v2 font-normal">
                                        Digital queries? I&apos;d love to hear
                                        them! Fill in your details and I&apos;ll
                                        get back to you as soon as possible.
                                    </p>
                                </div>
                                <ContactForm />
                            </div>
                            <Button
                                variant="ghost"
                                onPress={() => setIsContactOverlayOpen(false)}
                                className="absolute top-2 right-2 opacity-75 hover:opacity-100 hover:bg-white/25"
                                icon={<Cross strokeColor="stroke-purple" />}
                            />
                        </Card>
                    </FocusScope>
                </MotionDiv>
            )}
        </AnimatePresence>
    )
}

export default ContactOverlay

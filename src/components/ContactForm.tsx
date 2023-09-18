import { Dispatch, SetStateAction } from 'react'
import { FocusScope } from 'react-aria'
import AriaLink from './AriaLink'
import Button from './Button'
import Cross from './icons/Cross'

const ContactForm = ({
    setIsContactFormOpen,
}: {
    setIsContactFormOpen: Dispatch<SetStateAction<boolean>>
}) => (
    <FocusScope contain>
        {/* <div className="w-screen h-screen fixed top-0 flex flex-col justify-center items-center bg-black/50 z-30"> */}
        <div className="relative bg-purple text-blue flex flex-col items-center justify-center min-w-fit w-[40%] max-w-[600px] h-[160px] md:min-h-[200px] px-8 rounded-custom">
            <AriaLink
                href="mailto:saruunep@gmail.com"
                aria-label="Press to send email"
                target="_parent"
            >
                <h3 className="text-lg md:text-2xl font-serif">
                    Hello@freck.com
                </h3>
            </AriaLink>
            <Button
                variant="ghost"
                onPress={() => setIsContactFormOpen(false)}
                className="absolute top-2 right-4 hover:scale-110"
                icon={<Cross />}
            />
        </div>
        {/* </div> */}
    </FocusScope>
)

export default ContactForm

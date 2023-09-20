import { Dispatch, SetStateAction } from 'react'
import { FocusScope } from 'react-aria'
import Image from 'next/image'
import avatarHand from '../../public/img/MemojiHand_Contact.png'
import AriaLink from './AriaLink'
import Button from './Button'
import Cross from './icons/Cross'

const EmailOverlay = ({
    setIsEmailOverlayOpen,
}: {
    setIsEmailOverlayOpen: Dispatch<SetStateAction<boolean>>
}) => (
    <FocusScope contain autoFocus restoreFocus>
        <div className="relative bg-purple dark:bg-dark-secondary-bg text-blue flex flex-col items-center justify-center min-w-fit w-[60%] max-w-[800px] px-16 rounded-custom z-20 md:w-[40%] h-[160px] md:min-h-[200px] md:cursor-hand">
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
                onPress={() => setIsEmailOverlayOpen(false)}
                className="absolute top-2 right-4 hover:scale-110"
                icon={<Cross />}
            />
            <Image
                src={avatarHand}
                alt="Image of 3D hand waving"
                quality={100}
                height={100}
                width={100}
                className="absolute right-[-40px] bottom-[-40px] hidden sm:block"
            />
        </div>
    </FocusScope>
)

export default EmailOverlay

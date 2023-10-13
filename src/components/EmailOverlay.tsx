import { Dispatch, SetStateAction } from 'react'
import { FocusScope } from 'react-aria'
import AriaLink from './AriaLink'
import Button from './Button'
import Cross from './icons/Cross'

const EmailOverlay = ({
    setIsEmailOverlayOpen,
}: {
    setIsEmailOverlayOpen: Dispatch<SetStateAction<boolean>>
}) => (
    <FocusScope contain autoFocus restoreFocus>
        <div className="relative bg-purple dark:bg-dark-secondary-bg text-blue flex flex-col items-center justify-center pointer-events-auto min-w-fit w-[60%] max-w-[800px] px-16 rounded-custom z-20 md:w-[40%] h-[160px] md:min-h-[200px]">
            <AriaLink
                href="mailto:saruunep@gmail.com"
                aria-label="Press to send email"
                target="_parent"
            >
                <h3 className="text-lg md:text-2xl font-serif transition hover:scale-[105%]">
                    Hello@freck.com
                </h3>
            </AriaLink>
            <Button
                variant="ghost"
                onPress={() => setIsEmailOverlayOpen(false)}
                className="absolute top-2 right-2 opacity-75 hover:opacity-100 hover:bg-blue/25"
                icon={<Cross />}
            />
        </div>
    </FocusScope>
)

export default EmailOverlay

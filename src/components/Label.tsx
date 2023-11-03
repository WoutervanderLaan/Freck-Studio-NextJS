import classNames from 'classnames'
import { ReactNode } from 'react'
import UseViewportDetection from '@/hooks/useViewportDetection'

type labelPositionVariants = 'left' | 'top' | 'right' | 'bottom'

const labelPositionStyles: Record<labelPositionVariants, string> = {
    left: 'rotate-[-90deg] left-[-109px] top-[50%] translate-y-[-50%]',
    top: '',
    bottom: '',
    right: 'rotate-[90deg] right-[-109px] top-[50%] translate-y-[-50%]',
}

type labelColorVariants = 'default' | 'pink' | 'black' | 'orange'

const labelColorStyles: Record<labelColorVariants, string> = {
    default: 'text-white bg-purple',
    pink: 'bg-pink-dark text-white',
    black: 'text-white bg-black',
    orange: 'text-white bg-orange',
}

type LabelProps = {
    children: ReactNode
    position: labelPositionVariants
    style?: labelColorVariants
    className?: string
}

const Label = ({
    children,
    position,
    style = 'default',
    className,
}: LabelProps) => {
    const isTablet = UseViewportDetection(820)

    return (
        <div
            className={classNames(
                labelPositionStyles[position],
                labelColorStyles[style],
                className,
                'pt-4 pb-2 px-6 rounded-t-xl absolute',
                { hidden: isTablet }
            )}
        >
            <span className="md:text-base-variant">{children}</span>
        </div>
    )
}

export default Label

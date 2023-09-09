import classNames from 'classnames'
import { ReactNode } from 'react'

type CardProps = {
    children: ReactNode
    backgroundColor: string
    className?: string
}

const Card = ({ children, backgroundColor, className }: CardProps) => {
    return (
        <div
            className={classNames(
                'flex rounded-custom min-h-[300px] flex-col items-center px-[8%] py-10',
                backgroundColor,
                className
            )}
        >
            {children}
        </div>
    )
}

export default Card

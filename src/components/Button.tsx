'use client'

import { AriaButtonProps, useButton } from 'react-aria'
import { ReactNode, useRef } from 'react'
import classNames from 'classnames'
import AriaLink from './AriaLink'

type ButtonStyleVariants = 'default' | 'inverted'

const variantStyles: Record<ButtonStyleVariants, string> = {
    default: '',
    inverted: '',
}

type BaseProps = {
    variant?: ButtonStyleVariants
    ariaLabel?: string
    isDisabled?: boolean
    className?: string
}

type WithIconProps = BaseProps & {
    icon: ReactNode
    children?: string | ReactNode
}

type WithChildrenProps = BaseProps & {
    icon?: ReactNode
    children: string | ReactNode
}

type LinkProps = (WithChildrenProps | WithIconProps) & {
    href: string
}

type ButtonProps = (WithChildrenProps | WithIconProps) & {
    onPress: () => void
    target?: '_blank' | '_self'
    rel?: string
}

const Button = (props: ButtonProps | LinkProps) => {
    const {
        icon,
        children,
        variant = 'default',
        isDisabled,
        className,
        ariaLabel,
        ...rest
    } = props

    return (
        <>
            {'onPress' in props && (
                <AriaButton
                    {...rest}
                    aria-label={ariaLabel}
                    className={classNames(className, variantStyles[variant])}
                    onPress={props.onPress}
                    isDisabled={isDisabled}
                >
                    {children && children}
                    {icon && icon}
                </AriaButton>
            )}
            {'href' in props && (
                <AriaLink
                    {...rest}
                    aria-label={ariaLabel}
                    className={classNames(className, variantStyles[variant])}
                    href={props.href}
                    isDisabled={isDisabled}
                >
                    {children && children}
                    {icon && icon}
                </AriaLink>
            )}
        </>
    )
}

const AriaButton = (
    props: { children: ReactNode; className?: string } & AriaButtonProps
) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const { buttonProps } = useButton(props, buttonRef)
    const { children, className } = props

    return (
        <button ref={buttonRef} {...buttonProps} className={className}>
            {children}
        </button>
    )
}

export default Button

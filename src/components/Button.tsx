'use client'

import { AriaButtonProps, useButton, useFocusRing } from 'react-aria'
import { ReactNode, useRef } from 'react'
import classNames from 'classnames'
import AriaLink from './AriaLink'

type ButtonStyleVariants = 'default' | 'ghost' | 'switch'

const variantStyles: Record<ButtonStyleVariants, string> = {
    default:
        'w-fit px-6 py-3 rounded-xl bg-pink-dark text-white duration-100 hover:bg-pink hover:text-pink-dark dark:bg-green dark:hover:bg-white dark:hover:text-green',
    ghost: 'p-2 rounded-full md:p-4 md:text-[14px]',
    switch: 'rounded-full h-8 w-16 hover:scale-110 flex justify-between items-center p-1.5 border-2',
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
    const { isFocusVisible, focusProps } = useFocusRing()
    const { children, className } = props

    return (
        <button
            ref={buttonRef}
            {...buttonProps}
            {...focusProps}
            className={className}
            style={{
                WebkitAppearance: 'none',
                appearance: 'none',
                outline: isFocusVisible ? '3px solid dodgerblue' : 'none',
                transitionDuration: '200ms',
                outlineOffset: 2,
            }}
        >
            {children}
        </button>
    )
}

export default Button

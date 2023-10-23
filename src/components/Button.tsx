'use client'

import { AriaButtonProps, useButton, useFocusRing } from 'react-aria'
import { ReactNode, useRef } from 'react'
import classNames from 'classnames'
import AriaLink from './AriaLink'

type ButtonStyleVariants = 'default' | 'ghost' | 'switch' | 'small' | 'black'

const variantStyles: Record<ButtonStyleVariants, string> = {
    default:
        'w-fit px-9 py-5 rounded-custom bg-purple text-blue duration-200 hover:bg-blue hover:text-purple dark:bg-green dark:text-white dark:hover:bg-white dark:hover:text-green disabled:opacity-50',
    black: 'w-fit px-9 py-5 rounded-custom bg-black text-white duration-200 hover:bg-white hover:text-black disabled:opacity-50',
    ghost: 'p-2 rounded-full md:p-4 md:text-base-variant font-normal',
    switch: 'rounded-full h-8 w-16 hover:scale-110 flex justify-between items-center p-1.5 border-2',
    small: 'w-fit h-fit bg-pink-dark rounded-custom px-4 py-1 dark:bg-purple',
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
    target?: '_blank' | '_self'
    rel?: string
} & (
        | { onPress: () => void; type?: never; form?: never }
        | { type: 'button' | 'submit'; form: string; onPress?: never }
    )

const Button = (props: ButtonProps | LinkProps) => {
    const {
        icon,
        children,
        variant = 'default',
        className,
        ariaLabel,
        ...rest
    } = props

    return (
        <>
            {('onPress' in props || 'type' in props) && (
                <AriaButton
                    {...rest}
                    aria-label={ariaLabel}
                    className={classNames(variantStyles[variant], className)}
                    onPress={props.onPress}
                    type={props.type}
                >
                    {children && children}
                    {icon && icon}
                </AriaButton>
            )}
            {'href' in props && (
                <AriaLink
                    {...rest}
                    aria-label={ariaLabel}
                    className={classNames(variantStyles[variant], className)}
                    href={props.href}
                >
                    {children && children}
                    {icon && icon}
                </AriaLink>
            )}
        </>
    )
}

const AriaButton = (
    props: {
        children: ReactNode
        className?: string
        form?: string
    } & AriaButtonProps
) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const { isFocusVisible, focusProps } = useFocusRing()
    const { buttonProps } = useButton(props, buttonRef)
    const { children, className, isDisabled } = props

    return (
        <button
            ref={buttonRef}
            {...buttonProps}
            {...focusProps}
            form={props.form}
            disabled={isDisabled}
            className={classNames(className, 'outline-none transition', {
                'ring-4 ring-pink-dark ring-offset-2 ring-offset-white':
                    isFocusVisible,
            })}
        >
            {children}
        </button>
    )
}

export default Button

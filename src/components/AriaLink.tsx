'use client'

import Link from 'next/link'
import { ReactNode, useRef } from 'react'
import { AriaLinkOptions, useLink, useFocusRing } from 'react-aria'
import classNames from 'classnames'

type AriaLinkProps = {
    children: ReactNode
    href: string
    target?: '_blank' | '_self' | '_parent'
    rel?: string
    className?: string
}

const AriaLink = (props: AriaLinkProps & AriaLinkOptions) => {
    const linkRef = useRef<HTMLAnchorElement>(null)
    const { linkProps } = useLink(props, linkRef)
    const { isFocusVisible, focusProps } = useFocusRing()
    const { children, href, target, rel, className } = props

    return (
        <Link
            {...linkProps}
            {...focusProps}
            ref={linkRef}
            href={href}
            rel={rel}
            target={target}
            className={classNames(className, 'outline-none transition', {
                'ring-4 ring-pink-dark ring-offset-2 ring-offset-white':
                    isFocusVisible,
            })}
            draggable="false"
        >
            {children}
        </Link>
    )
}

export default AriaLink

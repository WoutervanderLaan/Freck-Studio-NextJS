'use client'

import Link from 'next/link'
import { ReactNode, useRef } from 'react'
import { AriaLinkOptions, useLink, useFocusRing } from 'react-aria'

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
            className={className}
            draggable="false"
            style={{
                WebkitAppearance: 'none',
                appearance: 'none',
                outline: isFocusVisible ? '3px solid dodgerblue' : 'none',
                transitionDuration: '200ms',
                outlineOffset: 2,
            }}
        >
            {children}
        </Link>
    )
}

export default AriaLink

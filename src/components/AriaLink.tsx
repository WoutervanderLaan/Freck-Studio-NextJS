'use client'

import Link from 'next/link'
import { ReactNode, useRef } from 'react'
import { AriaLinkOptions, useLink } from 'react-aria'

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
    const { children, href, target, rel, className } = props

    return (
        <Link
            {...linkProps}
            ref={linkRef}
            href={href}
            rel={rel}
            target={target}
            className={className}
        >
            {children}
        </Link>
    )
}

export default AriaLink

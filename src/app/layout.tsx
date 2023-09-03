import './globals.css'
import type { Metadata } from 'next'
import type { Organization, WithContext } from 'schema-dts'
import classNames from 'classnames'
import { Roboto_Slab, Baumans, Rubik } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const baumans = Baumans({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-baumans',
})

const robotoSLab = Roboto_Slab({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-robotoSlab',
})

const rubik = Rubik({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-rubik',
})

const jsonLd: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Freck Studio',
    image: 'android-chrome-512x512.png', /// TO DO: change to webp file
    description:
        'A Digital Design Studio that Elevates Your Message with Purposeful and Ethical Design',
    url: 'https://www.freck-studio.com',
    logo: 'https://www.freck-studio.com/logo.svg', /// TO DO: set up this route
    email: 'saruunep@gmail.com',
    telephone: '+370-639-20855',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jacob Oliepad 8',
        addressLocality: 'Amsterdam',
        addressRegion: 'Noord-Holland',
        postalCode: '1013 DP',
        addressCountry: 'the Netherlands',
    },
    sameAs: ['https://www.linkedin.com/in/sarunepaulauskaite/'],
}

export const metadata: Metadata = {
    title: 'Freck Studio',
    description:
        'A Digital Design Studio that Elevates Your Message with Purposeful and Ethical Design',
    icons: {
        icon: ['/favicon.svg', '/favicon.ico'],
        apple: '/apple-touch-icon.png',
        shortcut: '/favicon.ico',
    },
    manifest: '/manifest.json',
    keywords:
        'digital, digitaal, design, digital design, graphic, grafisch, grafisch vormgever, vormgever, graphic design, studio, design studio, design agency, illustrator, amsterdam, freck, freck studio, branding, brand, creative, creatief, agency, creative agency, creative design agency, illustrations, development, visual, marketing, visuele marketing, visual design, ideation, UX, user experience, user interface, interface, experience, UI, UI/UX design, strategy, strategie, merk, logo, logo design, web, web design, print, print design, corporate, identity, identiteit, IT, ict, packaging, motion graphics, animatie, animaties, 3d, 3d design, responsive web design, responsive, visual communication, communication, visual, portfolio, services, professional design, affordable design, professional, professioneel, betaalbaar, affordable, web assets, assets',
    openGraph: {
        title: 'Freck Studio - Digital Design Studio in Amsterdam',
        type: 'website',
        description:
            'A Digital Design Studio that Elevates Your Message with Purposeful and Ethical Design',
        images: [
            {
                url: '/img/share.webp', /// TO DO: make this image
                width: 1200,
                height: 630,
            },
        ],
        siteName: 'Freck Studio',
        url: 'https://www.freck-studio.com',
    },
    applicationName: 'Freck Studio',
    appleWebApp: {
        title: 'Freck Studio',
        statusBarStyle: 'default',
        capable: true,
    },
    twitter: {
        card: 'summary',
        title: 'Freck Studio',
        description:
            'A Digital Design Studio that Elevates Your Message with Purposeful and Ethical Design',
    },
    formatDetection: { telephone: false },
    themeColor: '#ffffff',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <meta name="mobile-web-app-capable" content="yes" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={classNames(
                    'font-sans flex flex-col min-h-screen',
                    baumans.variable,
                    robotoSLab.variable,
                    rubik.variable
                )}
            >
                <Navbar />
                <main className="flex-1 flex flex-col">{children}</main>
                <Footer />
            </body>
        </html>
    )
}

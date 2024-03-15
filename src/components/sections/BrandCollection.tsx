import BA from '../icons/brands/BA'
import Bite from '../icons/brands/Bite'
import Hostens from '../icons/brands/Hostens'
import IV from '../icons/brands/IV'
import Ignitis from '../icons/brands/Ignitis'
import Swedbank from '../icons/brands/Swedbank'
import VU from '../icons/brands/VU'
import AriaLink from '../AriaLink'
import { Fragment } from 'react'

const brandSVGCollection = [
    {
        component: <IV />,
        href: 'https://www.iv.lt/en/',
        name: 'Interneto Vizija website',
    },
    {
        component: <BA />,
        href: 'https://www.ba.lt/en/',
        name: 'Baltic Amadeus website',
    },
    {
        component: <Hostens />,
        href: 'https://www.hostens.com/',
        name: 'Hostens website',
    },
    {
        component: <Swedbank />,
        href: 'https://www.swedbank.com/',
        name: 'Swedbank website',
    },
    { component: <Bite />, href: 'https://www.bite.lt/', name: 'Bite website' },
    {
        component: <VU />,
        href: 'https://www.vu.lt/en/',
        name: 'Vilnius Univeristy website',
    },
    {
        component: <Ignitis />,
        href: 'https://ignitis.lt/en/electricity-home',
        name: 'Ignitis website',
    },
]

const BrandCollection = () => (
    <section className="container flex flex-col justify-center items-center py-10 sm:mb-4 lg:mb-10 lg:py-0">
        <h3 className="text-base-variant text-center lg:text-base-v2 mb-4 lg:mb-0">
            Brands I have worked with along the way:
        </h3>
        <div className="min-h-[100px] w-full px-4 lg:px-16 items-center py-2 grid grid-rows-3 grid-cols-3 gap-x-4 gap-y-6 lg:grid-cols-7 lg:grid-rows-1 lg:gap-4 xl:gap-10">
            {brandSVGCollection.map((brand, index) => (
                <Fragment key={index}>
                    {index === 6 && <div className="lg:hidden" />}
                    <AriaLink
                        href={brand.href}
                        target="_blank"
                        rel="external"
                        aria-label={brand.name}
                    >
                        <div className="grayscale transition hover:grayscale-0 hover:scale-[103%] dark:invert dark:opacity-50 dark:hover:opacity-100 dark:hover:grayscale flex items-center justify-center">
                            {brand.component}
                        </div>
                    </AriaLink>
                </Fragment>
            ))}
        </div>
    </section>
)

export default BrandCollection

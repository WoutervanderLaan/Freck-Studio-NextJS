import BA from '../icons/brands/BA'
import Bite from '../icons/brands/Bite'
import Hostens from '../icons/brands/Hostens'
import IV from '../icons/brands/IV'
import Ignitis from '../icons/brands/Ignitis'
import Swedbank from '../icons/brands/Swedbank'
import VU from '../icons/brands/VU'
import AriaLink from '../AriaLink'
import { MotionDiv } from '../MotionElement'

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
    <section className="relative flex flex-col justify-center items-center py-10 lg:mb-10 lg:py-0">
        <h3 className="text-base-variant text-center lg:text-base-v2 mb-4 lg:mb-0">
            Brands I have worked with along the way:
        </h3>

        <MotionDiv
            className="pt-4 w-fit flex flex-row gap-20 items-center lg:pt-10 px-10"
            style={{ y: '50%' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{
                ease: 'linear',
                duration: brandSVGCollection.length * 2,
                repeat: Infinity,
            }}
        >
            {[...brandSVGCollection, ...brandSVGCollection].map(
                (brand, index) => (
                    <AriaLink
                        key={index}
                        href={brand.href}
                        target="_blank"
                        rel="external"
                        aria-label={brand.name}
                    >
                        <div className="grayscale transition hover:grayscale-0 hover:scale-[103%] dark:invert dark:opacity-50 dark:hover:opacity-100 dark:hover:grayscale flex items-center justify-center">
                            {brand.component}
                        </div>
                    </AriaLink>
                )
            )}
        </MotionDiv>

        <MotionDiv
            className="pt-4 w-fit flex flex-row gap-20 items-center lg:pt-10 px-10"
            style={{ y: '-50%' }}
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
                ease: 'linear',
                duration: brandSVGCollection.length * 2,
                repeat: Infinity,
            }}
        >
            {[...brandSVGCollection, ...brandSVGCollection].map(
                (brand, index) => (
                    <AriaLink
                        key={index}
                        href={brand.href}
                        target="_blank"
                        rel="external"
                        aria-label={brand.name}
                    >
                        <div className="grayscale transition hover:grayscale-0 hover:scale-[103%] dark:invert dark:opacity-50 dark:hover:opacity-100 dark:hover:grayscale flex items-center justify-center">
                            {brand.component}
                        </div>
                    </AriaLink>
                )
            )}
        </MotionDiv>
    </section>
)

export default BrandCollection

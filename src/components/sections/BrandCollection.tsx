import BA from '../icons/brands/BA'
import Bite from '../icons/brands/Bite'
import Hostens from '../icons/brands/Hostens'
import IV from '../icons/brands/IV'
import Ignitis from '../icons/brands/Ignitis'
import Swedbank from '../icons/brands/Swedbank'
import VU from '../icons/brands/VU'
import AriaLink from '../AriaLink'

const brandSVGCollection = [
    { component: <Bite />, href: 'https://www.bite.lt/', name: 'Bite website' },
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
        component: <IV />,
        href: 'https://www.iv.lt/en/',
        name: 'Interneto Vizija website',
    },

    {
        component: <Ignitis />,
        href: 'https://ignitis.lt/en/electricity-home',
        name: 'Ignitis website',
    },
    {
        component: <Swedbank />,
        href: 'https://www.swedbank.com/',
        name: 'Swedbank website',
    },
    {
        component: <VU />,
        href: 'https://www.vu.lt/en/',
        name: 'Vilnius Univeristy website',
    },
]

const BrandCollection = () => (
    <section className="container flex flex-col justify-center items-center py-10 mb-[-40px] sm:mb-4 lg:mb-10 lg:py-0">
        <h3 className="text-sm sm:text-base lg:text-base-variant mb-4 lg:mb-0">
            Brands I have worked with along the way:
        </h3>
        <div className="min-h-[100px] w-full flex flex-row items-center justify-evenly gap-6 px-4 flex-wrap lg:gap-4 lg:px-16">
            {brandSVGCollection.map((brand, index) => (
                <AriaLink
                    key={index}
                    href={brand.href}
                    target="_blank"
                    rel="external"
                    aria-label={brand.name}
                >
                    <div className="max-h-5 max-w-5 flex justify-center grayscale transition hover:grayscale-0 hover:scale-[103%] sm:max-h-10 md:max-w-[100px] md:max-h-10 dark:invert dark:opacity-50 dark:hover:opacity-100 dark:hover:grayscale">
                        {brand.component}
                    </div>
                </AriaLink>
            ))}
        </div>
    </section>
)

export default BrandCollection

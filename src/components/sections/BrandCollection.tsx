import BA from '../icons/brands/BA'
import Bite from '../icons/brands/Bite'
import Fincell from '../icons/brands/Fincell'
import SevenPack from '../icons/brands/SevenPack'
import Hostens from '../icons/brands/Hostens'
import IV from '../icons/brands/IV'
import Ignitis from '../icons/brands/Ignitis'
import Swedbank from '../icons/brands/Swedbank'
import VU from '../icons/brands/VU'
import Time4vps from '../icons/brands/Time4vps'
import AriaLink from '../AriaLink'

const brandSVGCollection = [
    { component: <Bite />, href: 'https://www.bite.lt/' },
    { component: <Fincell />, href: 'https://www.fincell.eu/' },
    { component: <BA />, href: 'https://www.ba.lt/en/' },
    { component: <Hostens />, href: 'https://www.hostens.com/' },
    { component: <IV />, href: 'https://www.iv.lt/en/' },
    { component: <SevenPack />, href: 'https://7pack.lt/en/' },
    { component: <Ignitis />, href: 'https://ignitis.lt/en/electricity-home' },
    { component: <Swedbank />, href: 'https://www.swedbank.com/' },
    { component: <VU />, href: 'https://www.vu.lt/en/' },
    { component: <Time4vps />, href: 'https://www.time4vps.com/' },
]

const BrandCollection = () => {
    return (
        <section className="container flex flex-col justify-center items-center py-10 gap-4 mb-[-40px] lg:mb-0 lg:py-0">
            <h3 className="text-sm md:text-base lg:text-base-variant">
                Brands I have worked with along the way:
            </h3>
            <div className="min-h-[100px] flex flex-row items-center justify-evenly gap-7 flex-wrap lg:w-[80%] xl:w-full">
                {brandSVGCollection.map((brand, index) => (
                    <AriaLink
                        key={index}
                        href={brand.href}
                        target="_blank"
                        rel="external"
                    >
                        <div className="max-h-[80px] max-w-[80px] flex justify-center grayscale transition hover:grayscale-0 hover:scale-110 md:max-w-[100px] md:max-h-10 dark:invert dark:opacity-50 dark:hover:opacity-100 dark:hover:grayscale">
                            {brand.component}
                        </div>
                    </AriaLink>
                ))}
            </div>
        </section>
    )
}

export default BrandCollection

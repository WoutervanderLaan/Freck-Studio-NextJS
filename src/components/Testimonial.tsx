import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Card from './Card'
import classNames from 'classnames'

type Testimonial = {
    backgroundColor?: string
    textColor?: string
    image: StaticImport | string
    text: string
    name: string
    position: string
    company: string
    className?: string
}

const Testimonial = ({
    backgroundColor = 'bg-pink',
    textColor = 'text-green',
    image,
    text,
    name,
    position,
    company,
    className,
}: Testimonial) => (
    <Card backgroundColor={backgroundColor} className="gap-6 h-fit">
        <div className="relative aspect-square w-[60%] sm:w-[40%] md:w-[60%]">
            <Image
                src={image}
                fill
                quality={100}
                alt={`portrait of ${name} from company ${company}`}
                className="object-cover rounded-full"
                sizes="(min-width: 1280px) 100vw, (min-width: 768px) 20vw, 33vw"
            />
        </div>
        <div
            className={classNames(
                'flex flex-col gap-4 text-center',
                className,
                textColor
            )}
        >
            <p className="w-full italic mb-5 md:text-base-variant">"{text}"</p>
            <div>
                <p className="font-medium text-base">{name}</p>
                <p className="text-base">{position}</p>
                <p className="text-base">{company}</p>
            </div>
        </div>
    </Card>
)

export default Testimonial

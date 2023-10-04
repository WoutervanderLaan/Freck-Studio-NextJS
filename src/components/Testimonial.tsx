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
    backgroundColor = 'bg-pink dark:bg-dark-quarternary-bg',
    textColor = 'text-green',
    image,
    text,
    name,
    position,
    company,
    className,
}: Testimonial) => (
    <Card backgroundColor={backgroundColor} className="gap-6 h-fit">
        <Image
            width={120}
            height={120}
            src={image}
            alt={`portrait of ${name} from company ${company}`}
            className="rounded-full aspect-square object-none"
        />
        <div
            className={classNames(
                'flex flex-col gap-4 text-center',
                className,
                textColor
            )}
        >
            <p className="w-full italic mb-5 text-base-variant">"{text}"</p>
            <div>
                <p className="font-medium text-base">{name}</p>
                <p className="text-base">{position}</p>
                <p className="text-base">{company}</p>
            </div>
        </div>
    </Card>
)

export default Testimonial

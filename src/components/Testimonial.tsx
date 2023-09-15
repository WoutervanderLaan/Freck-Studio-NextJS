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
    backgroundColor = 'bg-blue',
    textColor = 'text-white',
    image,
    text,
    name,
    position,
    company,
    className,
}: Testimonial) => (
    <Card backgroundColor={backgroundColor} className="gap-6 py-auto h-full">
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
            <p className="w-full italic mb-6">"{text}"</p>
            <div>
                <p className="font-bold text-base-variant">{name}</p>
                <p className="text-sm">{position}</p>
                <p className="text-sm">{company}</p>
            </div>
        </div>
    </Card>
)

export default Testimonial

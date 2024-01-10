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
    <Card
        backgroundColor={backgroundColor}
        className="gap-7 h-fit px-6 py-12"
        padding={false}
    >
        <div className="relative aspect-square w-[65%] sm:w-[40%] md:w-[50%]">
            <Image
                src={image}
                fill
                quality={100}
                priority
                alt={`portrait of ${name} from company ${company}`}
                className="object-cover rounded-full"
                sizes="(max-width: 639px) 50vw, (max-width: 768px) 33vw, 20vw"
            />
        </div>
        <div
            className={classNames(
                'flex flex-col gap-4 text-center',
                className,
                textColor
            )}
        >
            <p className="w-full mb-5 text-base-variant lg:px-6">
                &quot;{text}&quot;
            </p>
            <div>
                <p className="font-medium text-base-variant md:text-[18px]">
                    {name}
                </p>
                <p className="text-base-variant md:text-base">{position}</p>
                <p className="text-base-variant md:text-base italic">
                    {company}
                </p>
            </div>
        </div>
    </Card>
)

export default Testimonial

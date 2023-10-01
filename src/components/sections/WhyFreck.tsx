import Image from 'next/image'
import monkeyImg from '../../../public/img/monkey.png'
import Card from '../Card'
import Tag from '../Tag'

const designServices = [
    'illustrations',
    '3D assets',
    'Branding',
    'Research',
    'Prototyping',
    'UX/UI',
    'Strategy',
    'Development',
    'Visual Design',
    'Ideation',
    'Motion',
]

const WhyFreck = () => (
    <section
        id="why"
        className="container flex flex-col gap-10 scroll-my-20 lg:flex-row"
    >
        <Card
            backgroundColor="bg-pink dark:bg-dark-tertiary-bg"
            className="w-full h-fit lg:h-[800px] text-green flex flex-col lg:py-16"
        >
            <div className="bg-pink-dark w-[60%] aspect-square rounded-full">
                <Image
                    src={monkeyImg}
                    className="scale-[1.3]"
                    alt="image of monkey holding a heart"
                />
            </div>
            <div className="text-center flex flex-col justify-between h-fit pt-10 gap-6 lg:gap-14 lg:p-14">
                <h3 className="text-lg font-medium font-serif lg:text-2xl">
                    I will save you time and money
                </h3>
                <p>
                    Save your resources! <br />
                    Bring your ideas to life with me.
                </p>
                <p className="italic font-bold">Let's do it!</p>
            </div>
        </Card>

        <Card
            backgroundColor="bg-black dark:bg-dark-primary-bg"
            className="w-full h-fit lg:h-[800px] text-white flex flex-col gap-10 lg:gap-20 lg:py-16"
        >
            <h3 className="text-lg font-medium font-serif text-center lg:text-2xl">
                Speed your design workflow with:
            </h3>
            <div className="flex flex-row flex-wrap gap-2 lg:gap-4">
                {designServices.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </div>
        </Card>
    </section>
)

export default WhyFreck

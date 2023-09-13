import Intro from '@/components/sections/Intro'
import WhoCard from '@/components/sections/WhoCard'
// import Card from '@/components/Card'
import Brands from '@/components/sections/Brands'
import Testimonials from '@/components/sections/Testimonials'

const HomePage = () => {
    return (
        <>
            <Intro />

            <Brands />

            <section id="about" className="container">
                <WhoCard />
            </section>

            {/* <section
                id="why"
                className="container flex flex-col gap-10 lg:flex-row"
            >
                <Card
                    backgroundColor="bg-pink dark:bg-dark-tertiary-bg"
                    className="w-full h-[800px]"
                >
                    <div className="bg-pink-dark w-[60%] aspect-square rounded-full" />
                </Card>
                <Card
                    backgroundColor="bg-black dark:bg-dark-primary-bg"
                    className="w-full h-[800px]"
                >
                    <div className="bg-white w-[60%] aspect-square rounded-full" />
                </Card>
            </section> */}

            <Testimonials />
        </>
    )
}

export default HomePage

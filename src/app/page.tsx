import Intro from '@/components/sections/Intro'
import WhoCard from '@/components/sections/WhoCard'
import Card from '@/components/Card'
import Brands from '@/components/sections/brands'

const HomePage = () => {
    return (
        <>
            <Intro />
            <Brands />
            <section className="container" id="about">
                <WhoCard />
            </section>
            <section
                className="container flex flex-col gap-10 lg:flex-row"
                id="why"
            >
                <Card backgroundColor="bg-pink" className="w-full h-[800px]">
                    <div className="bg-pink-dark w-[60%] aspect-square rounded-full" />
                </Card>
                <Card backgroundColor="bg-black" className="w-full h-[800px]">
                    <div className="bg-white w-[60%] aspect-square rounded-full" />
                </Card>
            </section>
        </>
    )
}

export default HomePage

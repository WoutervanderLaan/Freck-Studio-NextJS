import Intro from '@/components/sections/Intro'
import WhoCard from '@/components/sections/WhoCard'
import Card from '@/components/Card'
import Brands from '@/components/sections/brands'

const HomePage = () => {
    return (
        <div className="w-full flex-1 flex flex-col gap-10 items-center justify-center">
            <Intro />
            <Brands />
            <section className="container" id="about">
                <WhoCard />
            </section>
            <section className="container" id="why">
                <Card backgroundColor="bg-pink" className="w-full h-[600px]">
                    HI
                </Card>
            </section>
        </div>
    )
}

export default HomePage

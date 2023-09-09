import Intro from '@/components/sections/Intro'
import WhoCard from '@/components/sections/WhoCard'

const HomePage = () => {
    return (
        <div className="w-full flex-1 flex flex-col gap-10 items-center justify-center">
            <Intro />

            <section className="container">
                <WhoCard />
            </section>
        </div>
    )
}

export default HomePage

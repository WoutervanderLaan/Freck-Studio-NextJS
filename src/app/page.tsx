import Intro from '@/components/sections/Intro'
import WhoCard from '@/components/sections/WhoCard'
import BrandCollection from '@/components/sections/BrandCollection'
import Projects from '@/components/sections/Projects'
import WhyFreck from '@/components/sections/WhyFreck'
import Testimonials from '@/components/sections/Testimonials'
import ClientMotionConfig from '@/components/ClientMotionConfig'

const HomePage = () => {
    return (
        <ClientMotionConfig>
            <Intro />

            <BrandCollection />

            <WhyFreck />

            <WhoCard />

            <Projects />

            <Testimonials />
        </ClientMotionConfig>
    )
}

export default HomePage

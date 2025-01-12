import Intro from '@/components/sections/Intro'
import WhoCard from '@/components/sections/WhoCard'
import BrandCollection from '@/components/sections/BrandCollection'
// import Projects from '@/components/sections/Projects'
import WhyFreck from '@/components/sections/WhyFreck'
import Testimonials from '@/components/sections/Testimonials'
import Services from '@/components/sections/Services'
import ClientMotionConfig from '@/components/ClientMotionConfig'

const HomePage = () => (
    <ClientMotionConfig>
        <Intro />

        <BrandCollection />

        <WhyFreck />

        <Services />

        {/* <Projects /> */}

        <Testimonials />

        <WhoCard />
    </ClientMotionConfig>
)

export default HomePage

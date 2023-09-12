import Testimonial from '../Testimonial'
import portrait from '../../../public/img/42295258_1908080579281083_4492696045435748352_o.jpg'

const Testimonials = () => (
    <section className=" container flex flex-col lg:flex-row gap-4 xl:gap-10">
        <Testimonial
            backgroundColor="bg-black dark:bg-dark-quarternary-bg"
            textColor="text-orange-500 dark:text-white"
            name="Wouter van der Laan"
            position="CEO Ciri empire"
            company="Canvasheroes"
            image={portrait}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
        />
        <Testimonial
            backgroundColor="bg-purple dark:bg-dark-secondary-bg"
            textColor="text-emerald-400"
            name="Wouter van der Laan"
            position="CEO Ciri empire"
            company="Canvasheroes"
            image={portrait}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
        />
        <Testimonial
            name="Wouter van der Laan"
            position="CEO Ciri empire"
            company="Canvasheroes"
            image={portrait}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
        />
    </section>
)

export default Testimonials

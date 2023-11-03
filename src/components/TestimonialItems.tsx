import milda from '../../public/img/Milda.png'
import skaiste from '../../public/img/Skaistė.png'
import silvija from '../../public/img/Silvija.png'

const TestimonialItems = () => [
    {
        backgroundColor: 'bg-gray',
        textColor: 'text-black',
        name: 'Wouter van der Laan',
        position: 'Unemployed',
        company: 'Stay at home dad',
        image: skaiste,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
    {
        name: 'Wouter van der Laan',
        position: 'Artist Freelancer',
        company: 'Self-employed',
        image: milda,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
    {
        backgroundColor: 'bg-green-light',
        textColor: 'text-purple-alt',
        name: 'Wouter van der Laan',
        position: 'CEO Ciri empire',
        company: 'Canvasheroes',
        image: silvija,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
]

export default TestimonialItems

import colors from 'tailwindcss'

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                ...colors,
                blue: '#47A8E8',
                'blue-intense': '#1552F1',
                purple: '#4900A5',
                'purple-alt': '#6E48F5',
                pink: '#FFE5EB',
                'pink-dark': '#EC8DAA',
                green: '#247201',
                'green-light': '#D8EFD2',
                'bright-green': '#35FB6C',
                'bright-red': '#ED1D24',
                gray: '#E0E0E0',
                'gray-light': '#F2F2F2',
                'dark-bg': '#0E100D',
                orange: '#FF6B00',
            },
            aspectRatio: {
                desk: '20 / 11',
                swedbank: '9 / 2',
                hands: '31 / 20',
            },
            borderRadius: {
                custom: '40px',
            },
            cursor: {
                hand: 'url(/img/cursor-hand_small.png), pointer',
            },
        },

        backgroundImage: {
            'dark-primary-bg': 'radial-gradient(#848484, #3a3a3a)',
            'dark-secondary-bg': 'radial-gradient(#9137ff, #4900a3)',
            'dark-tertiary-bg': 'radial-gradient(#ffe5eb, #ffb8c8)',
            'dark-quarternary-bg': 'radial-gradient(#2b7347, #2b553b)',
            'dark-quintenary-bg': 'radial-gradient(#1552F1, #0A38AE)',
            'button-gradient-1': 'linear-gradient(45deg, #ec8eaa, #4900a3)',
            'button-gradient-2':
                'linear-gradient(90deg, #ffca49,#ff9561,#ef78cf,#9137ff)',
            'button-gradient-3': 'linear-gradient(90deg, #6effd7, #78ff84)',
            'gradient-transparent':
                'linear-gradient(90deg, #fff, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), #fff)',
        },
        fontFamily: {
            sans: ['var(--font-rubik)'],
            serif: ['var(--font-robotoSlab)'],
            cursive: ['var(--font-baumans)'],
        },
        fontWeight: {
            normal: '300',
            base: '400',
            medium: '500',
            bold: '700',
            black: '800',
        },
        fontSize: {
            xs: ['10px', '10px'],
            sm: ['12px', '17px'],
            base: ['16px', '20px'],
            'base-variant': ['20px', '24px'],
            'base-v2': ['24px', '34px'],
            lg: ['24px', '28px'],
            'lg-variant': ['33px', '44px'],
            xl: ['40px', '40px'],
            '2xl': ['52px', '60px'],
            '3xl': ['76px', '100px'],
            '4xl': ['90px', '90px'],
        },

        container: {
            center: true,
            padding: { DEFAULT: '1.25rem', md: '2.5rem', lg: '1rem' },
        },
    },
    plugins: [],
}

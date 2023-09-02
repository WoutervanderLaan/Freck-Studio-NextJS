import colors from 'tailwindcss'

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                ...colors,
                blue: '#47A8E8',
                purple: '#4900A2',
                pink: '#FFE5EB',
                'pink-dark': '#EC8DAA',
                green: '#247201',
                'primary-bg': '#ffffff',
                'secondary-bg': '#000000',
                'tertiary-bg': '#E0E0E0',
                'dark-bg': '#0E100D',
            },
        },

        backgroundImage: {
            'dark-primary-bg': 'radial-gradient(#848484, #3a3a3a)',
            'dark-secondary-bg': 'radial-gradient(#9137ff, #4900a3)',
            'dark-tertiary-bg': 'radial-gradient(#ffe5eb, #ffb8c8)',
            'dark-quarternary-bg': 'radial-gradient(#2b7347, #2b553b)',
            'button-gradient-1': 'linear-gradient(90deg, #ec8eaa, #4900a3)',
            'button-gradient-2':
                'linear-gradient(90deg, #ffca49,#ff9561,#ef78cf,#9137ff)',
            'button-gradient-3': 'linear-gradient(90deg, #6effd7, #78ff84)',
        },
        fontFamily: {
            sans: ['var(--font-rubik)'],
            serif: ['var(--font-robotoSlab)'],
            cursive: ['var(--font-baumans)'],
        },
        fontWeight: {
            normal: '400',
            medium: '500',
            bold: '700',
            black: '800',
        },
        fontSize: {
            xs: ['10px', '10px'],
            sm: ['12px', '17px'],
            base: ['16px', '16px'],
            lg: ['24px', '24px'],
            xl: ['40px', '40px'],
            '2xl': ['48px', '48px'],
            '3xl': ['72px', '72px'],
        },
    },
    plugins: [],
}

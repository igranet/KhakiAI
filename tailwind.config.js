/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
            },
            spacing: {
                128: '32rem',
                256: '64rem',
            },
            backgroundSize: {
                'size-200': '200% 200%',
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-100': '100% 100%',
            },
            animation: {
                backgroundImage: 'backgroundImage 3s ease infinite',
            },
            keyframes: {
                backgroundImage: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': '0% 0%',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': '100% 100%',
                    },
                },
            },
        },
    },
    plugins: [],
};

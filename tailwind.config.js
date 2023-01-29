/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontFamily: {
            sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        },
    },
    extend: {
        backgroundImage: {
            'khaki-bg': "url('/public/khakicolors.png')",
        },
        animation: {
            fadeIn: 'fadeIn 2s ease-in forwards',
        },
        keyframes: {
            fadeIn: {
                '0%': { opacity: 0 },
                '100%': { opacity: 1 },
            },
        },
    },
};

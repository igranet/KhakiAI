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
    },
    plugins: [],
};

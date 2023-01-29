/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontFamily: {
            sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'khaki-bg': "url('/public/khakicolors.png')",
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
};

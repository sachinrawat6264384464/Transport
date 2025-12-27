/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316', // Main Orange
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                    950: '#431407',
                },
                secondary: {
                    50: '#f0fdfa',
                    500: '#14b8a6',
                    600: '#0d9488',
                },
                accent: {
                    500: '#f43f5e',
                    600: '#e11d48',
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
                'slide-in-right': 'slideInRight 0.5s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.9', transform: 'scale(1.02)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                }
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Source Serif 4"', 'serif'],
            },
            colors: {
                primary: '#FFCC00', // Amarelo Vibrante
                dark: '#000000', // Preto
                light: '#F8F8F8', // Cinza Lendário
            }
        },
    },
    plugins: [],
}

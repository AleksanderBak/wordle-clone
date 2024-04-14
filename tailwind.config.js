/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            Poppins: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                "main-bg": "#121213",
            },
        },
    },
    plugins: [],
};

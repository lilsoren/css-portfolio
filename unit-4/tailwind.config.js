// tailwind.config.js
export default {
    content: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                brand: '#6d28d9',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
};
/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        fontFamily: {
            'display': 'Yeseva One',
            'sans': 'Roboto Mono',
        },
        colors: {
            'bgcolor': 'var(--theme-color-bgcolor)',
            'lightcolor': 'var(--theme-color-lightcolor)',
            'darkcolor': 'var(--theme-color-darkcolor)',
          },
    },
    plugins: [],
};

import type { Config } from 'tailwindcss';
import { createThemes } from 'tw-colors';

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {},
    plugins: [
        createThemes({
            light: {
                primary: '#f7f7f7',
                secondary: '#dededf',
                tertiary: '#ffffff',
                brand: '#2980B9',
                textColor: '#000000',
            },
            dark: {
                primary: '#383a42',
                secondary: '#232429',
                tertiary: '#4a4d5a',
                brand: '#2980B9',
                textColor: '#ffffff',
            },
        }),
    ],
};
export default config;

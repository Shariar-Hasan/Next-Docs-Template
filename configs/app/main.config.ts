import horizontal from './../assets/logo-h-500.png';
import vertical from './../assets/logo-v-500.png';
import favicon from './../assets/logo-v-500.png';
const mainConfig = {
    appName: 'Next Docs Maker',
    shortAppName: 'NDM',
    version: '1.0.0',
    author: 'Shariar Hasan',
    title: 'Next Docs Maker',
    description:
        'A Next.js-powered documentation maker with a collection of reusable components that make it easy to build and customize documentation sites. With a focus on flexibility, it offers pre-built elements like navigation, sidebars, headers, footers, and content blocks, allowing users to quickly assemble and deploy their docs with minimal effort. Perfect for developers looking for a fast, intuitive way to document their projects with a modern UI.',
    // Design
    logo: {
        horizontal,
        vertical,
        favicon,
    },

    // funcitonal
    useLocalStorage: {
        theme: {
            enable: true,
            key: 'theme',
            defaultValue: 'light',
        },
    },
    disableRightClick: false,
    disableInspectElement: false,
};
export default mainConfig;

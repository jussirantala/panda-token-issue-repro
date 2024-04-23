import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: env.ASDASD_CDN_LOCATION,
        build: {
            outDir: 'out',
            target: 'es2015',
        },
        define: {
            'process.env': {
                NODE_ENV: env.NODE_ENV,
            },
        },
        envPrefix: ['ASDASD_', 'GIT_', 'SENTRY_', 'VITE_'],
        plugins: [
            react({
                jsxImportSource: '@emotion/react',
                babel: {
                    plugins: [
                        '@emotion/babel-plugin',
                        ['@babel/plugin-proposal-decorators', {legacy: true}],
                    ],
                },
            }),
        ],
        preview: {
            host: '0.0.0.0',
            port: 3000,
        },
    };
});

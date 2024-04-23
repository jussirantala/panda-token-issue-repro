import {defineConfig} from '@pandacss/dev';
import {preset as edsPreset} from '@asdasd-social/styled-system';

export default defineConfig({
    presets: [edsPreset],
    include: [
        './node_modules/@asdasd-social/styled-system/dist/panda.buildinfo.json',
        './node_modules/@asdasd-social/shared/src/components/**/*.{css.js,jsx,css.ts,tsx}',
        './src/components/**/*.{css.js,jsx,css.ts,tsx}',
    ],
    importMap: '@asdasd-social/styled-system',
    outExtension: 'js',
    prefix: 'panda',
    jsxFramework: 'react',
});

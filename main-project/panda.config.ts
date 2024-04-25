import {defineConfig} from '@pandacss/dev';
import {preset as edsPreset} from '@asdasd-social/styled-system';

export default defineConfig({
    presets: [edsPreset],
    include: [
        './node_modules/@asdasd-social/styled-system/dist/panda.buildinfo.json',
        '../packages/shared/src/**/*.{css.ts,tsx}',
        './src/**/*.{tsx,css.ts}',
    ],
    importMap: '@asdasd-social/styled-system',
    outExtension: 'js',
    prefix: 'panda',
    jsxFramework: 'react',
});

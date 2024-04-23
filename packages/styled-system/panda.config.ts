import {Preset, defineConfig} from '@pandacss/dev';
import preset from './src/preset';

export default defineConfig({
    presets: [preset as Preset],
    jsxFramework: 'react',
    importMap: '@asdasd-social/styled-system',
    outdir: 'src',
    prefix: 'panda',
    outExtension: 'js',
});

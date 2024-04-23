import { cva } from '@asdasd-social/styled-system';

export const root = cva({
    base: {
        padding: 'testToken',
    },
    variants: {
        color: {
            yellow: {
                color: 'yellow',
            },
            red: {
                color: 'red',
            },
        }
    }
});
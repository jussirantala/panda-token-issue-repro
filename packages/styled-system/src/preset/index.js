import {definePreset} from '@pandacss/dev';

const customPandaPreset = definePreset({
    theme: {
        extend: {
            tokens: {
                spacing: {
                    'testToken': {
                        value: "5rem",
                    },
                },
            },
        },
    },
});

export default customPandaPreset;

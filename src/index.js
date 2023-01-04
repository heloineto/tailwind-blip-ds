const plugin = require('tailwindcss/plugin');

module.exports = plugin(() => {}, {
    theme: {
        extend: {
            colors: {
                'primary-light': '#b3d4ff',
                'primary-main': '#3f7de8',
                'primary-dark': '#125ad5',
                'primary-night': '#0747a6',
                'primary-purples-pixie': '#cc99ff',
                'primary-purples-bell': '#c226fb',
                'primary-purples-witch': '#9933cc',
                'primary-purples-acai': '#4f0e87',
                'primary-greens-mint': '#90e6bc',
                'primary-greens-true': '#21cc79',
                'primary-greens-aligator': '#008767',
                'primary-greens-forest': '#0a6045',
                'primary-pinks-yogurt': '#fdacc5',
                'primary-pinks-watermelon': '#fb5a8b',
                'primary-pinks-barbie': '#aa398d',
                'primary-pinks-blush': '#821a67',
                'primary-oranges-sunset': '#ffb186',
                'primary-oranges-carrot': '#ff6e1d',
                'primary-oranges-doritos': '#c64026',
                'primary-oranges-clay': '#8e3925',
                'primary-yellows-corn': '#fff6a8',
                'primary-yellows-sun': '#ffec03',
                'primary-yellows-guarana': '#b2b229',
                'primary-yellows-moss': '#757010',
                'extend-reds-flower': '#ffa5a5',
                'extend-reds-delete': '#ff4c4c',
                'extend-reds-lipstick': '#a01c2c',
                'extend-reds-dragon': '#6a2026',
                'extend-browns-sand': '#ffd29e',
                'extend-browns-cheetos': '#f6a721',
                'extend-browns-sphinx': '#d78935',
                'extend-browns-wood': '#845d37',
                'extend-grays-moon': '#d1d3d4',
                'extend-grays-elevator': '#a7a9ac',
                'extend-grays-street': '#6d6f71',
                'extend-grays-blackwidow': '#000000',
                'disabled-bg': '#e8f2ff',
                'hover-light': '#d1e3fa',
                'disabled-text': '#637798',
                'disabled-delete': '#fccccc',
                'disabled-error': '#da7a7a',
                'disabled-wrong': '#ba5a5a',
                'neutral-dark-eclipse': '#0a0f1a',
                'neutral-dark-onix': '#1a2437',
                'neutral-dark-suit': '#212a3c',
                'neutral-dark-ico': '#192438',
                'neutral-dark-city': '#202c44',
                'neutral-dark-skate': '#233049',
                'neutral-dark-desk': '#3a4a65',
                'neutral-dark-rooftop': '#505f79',
                'neutral-medium-elephant': '#6e7b91',
                'neutral-medium-cloud': '#8ca0b3',
                'neutral-medium-silver': '#b9cbd3',
                'neutral-medium-wave': '#d2dfe6',
                'neutral-light-box': '#e7edf4',
                'neutral-light-whisper': '#f3f6fa',
                'neutral-light-breeze': '#f8fbfb',
                'neutral-light-snow': '#ffffff'
            },
            fontSize: {
                'fs-10': [
                    '10px',
                    {
                        lineHeight: '16px'
                    }
                ],
                'fs-12': [
                    '12px',
                    {
                        lineHeight: '20px'
                    }
                ],
                'fs-14': [
                    '14px',
                    {
                        lineHeight: '22px'
                    }
                ],
                'fs-16': [
                    '16px',
                    {
                        lineHeight: '24px'
                    }
                ],
                'fs-20': [
                    '20px',
                    {
                        lineHeight: '28px'
                    }
                ],
                'fs-24': [
                    '24px',
                    {
                        lineHeight: '32px'
                    }
                ],
                'fs-32': [
                    '32px',
                    {
                        lineHeight: '40px'
                    }
                ],
                'fs-40': [
                    '40px',
                    {
                        lineHeight: '48px'
                    }
                ]
            }
        }
    }
});

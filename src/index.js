const plugin = require('tailwindcss/plugin')
const colors = require('./colors')

module.exports = plugin(() => {}, {
  theme: {
    extend: {
      colors,
      fontSize: {
        'fs-10': [
          '10px',
          {
            lineHeight: '16px',
          },
        ],
        'fs-12': [
          '12px',
          {
            lineHeight: '20px',
          },
        ],
        'fs-14': [
          '14px',
          {
            lineHeight: '22px',
          },
        ],
        'fs-16': [
          '16px',
          {
            lineHeight: '24px',
          },
        ],
        'fs-20': [
          '20px',
          {
            lineHeight: '28px',
          },
        ],
        'fs-24': [
          '24px',
          {
            lineHeight: '32px',
          },
        ],
        'fs-32': [
          '32px',
          {
            lineHeight: '40px',
          },
        ],
        'fs-40': [
          '40px',
          {
            lineHeight: '48px',
          },
        ],
      },
    },
  },
})

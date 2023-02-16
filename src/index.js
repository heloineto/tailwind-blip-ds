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
      boxShadow: {
        paper: '0px 2px 8px rgba(7, 71, 166, 0.15)',
        'paper-primary': '0px 10px 16px rgba(7, 71, 166, 0.12)',
        'paper-secondary':
          '0px 16px 20px rgba(7, 71, 166, 0.16), 0px 0px 2px rgba(7, 71, 166, 0.2)',
      },
    },
  },
})

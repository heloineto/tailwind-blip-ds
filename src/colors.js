const blipColors = require('blip-tokens/build/json/colors.json')

const hexRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/

const colorsArray = Object.entries(blipColors).filter(([key, value]) => hexRegex.test(value))

const colors = colorsArray.reduce((accumulator, [key, value]) => {
  const newKey = key.replace(/^(color-)/, '')

  return { ...accumulator, [newKey]: value }
}, {})

module.exports = colors

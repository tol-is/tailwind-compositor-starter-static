const path = require('path');

const root = 16;
const baseline = 8;
const leading = 4;

// type scale in px
const type = [14, 16, 18, 20, 22, 24, 28, 30, 32, 40, 48, 56, 60, 72];

// rhythm scale in baseline units
const rhythm = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12];
rhythm.px = '1px';
rhythm.semi = 0.5;

// measure scale in characters unit
const measure = [10, 15, 20, 25, 30, 35, 50, 55, 60, 65];
measure.auto = 'auto';

// font config
const fonts = [
  {
    key: 'sans-400',
    fallback: 'sans-serif',
    file: path.resolve('./src/fixtures/fonts/inter/Inter-Regular.woff2'),
  },
  {
    key: 'sans-400i',
    fallback: 'sans-serif',
    file: path.resolve('./src/fixtures/fonts/inter/Inter-Italic.woff2'),
  },
  {
    key: 'sans-600',
    fallback: 'sans-serif',
    file: path.resolve('./src/fixtures/fonts/inter/Inter-SemiBold.woff2'),
  },
];

module.exports = {
  useRem: true,
  baseline,
  root,
  leading,
  type,
  rhythm,
  measure,
  fonts,
  options: {
    xray: true,
    type: true,
    rhythm: true,
    measure: true,
  },
};

const path = require('path');

// root font size
const root = 16;

// baseline grid height
const baseline = 8;

// max leading
const leading = 2;

// type scale in px
const type = [18, 20, 60, 72];

// rhythm scale in baseline units
const rhythm = [0, 2, 5, 7];
rhythm.px = '1px';
rhythm.semi = 0.5;

// measure scale in characters unit
const measure = [10, 15, 50, 55];
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
    baseline: true,
    capheight: true,
    rhythm: true,
    measure: true,
  },
};

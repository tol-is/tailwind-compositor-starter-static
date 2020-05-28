# Tailwind Compositor Starter Static

Starter kit for [tailwind-compositor](https://github.com/a7sc11u/tailwind-compositor).

## Install

```js
  yarn install
  // or

  // then
  yarn develop
  // or
  npm develop

  // build
  yarn build
  // or
  npm build
```

## compositor.config.js

```js
const root = 16;
const baseline = 8;
const leading = 2;

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
```

## Utility Classes

### Fonts

```js
.font-sans-400  // Inter Regular
.font-sans-400i // Inter Italic
.font-sans-600 // Inter Semibold;
```

### Font Size - Baseline

```js

  // baseline: 8
  // leading: 2
  // type: [18, 20, 60, 72]

  .text-0/0 : 18px leading 0px
  .text-0/1 : 18px leading 8px
  .text-0/2 : 18px leading 16px

  .text-1/0 : 20px leading 0px
  .text-1/1 : 20px leading 8px
  .text-1/2 : 20px leading 16px

  .text-2/0 : 60px leading 0px
  .text-2/1 : 60px leading 8px
  .text-2/2 : 60px leading 16px

  .text-3/0 : 72px leading 0px
  .text-3/1 : 72px leading 8px
  .text-3/2 : 72px leading 16px

```

### Font Size - Cap Height

```js

  // baseline: 8
  // leading: 2
  // type: [18, 20, 60, 72]

  .capheight-0/0 : 18px leading 0px
  .capheight-0/1 : 18px leading 8px
  .capheight-0/2 : 18px leading 16px

  .capheight-1/0 : 20px leading 0px
  .capheight-1/1 : 20px leading 8px
  .capheight-1/2 : 20px leading 16px

  .capheight-2/0 : 60px leading 0px
  .capheight-2/1 : 60px leading 8px
  .capheight-2/2 : 60px leading 16px

  .capheight-3/0 : 72px leading 0px
  .capheight-3/1 : 72px leading 8px
  .capheight-3/2 : 72px leading 16px
```

### Measure

```js

  // measure: [10, 15, 50, 55]

  .measure-0 : 15ch
  .measure-1 : 20ch
  .measure-2 : 50ch
  .measure-3 : 60ch

```

### Size

```js

  // baseline: 8
  // rhythm : [0, 2, 5, 7];
  // rhythm.px = '1px';
  // rhythm.semi = 0.5;

  .h-0 : 0px
  .h-1 : 16px
  .h-2 : 40px
  .h-3 : 56px
  .h-px : 1px
  .h-semi : 4px

  .min-h-0 : 0px
  .min-h-1 : 16px
  .min-h-2 : 40px
  .min-h-3 : 56px
  .min-h-px : 1px
  .min-h-semi : 4px


  ...

```

### Space

```js

  // baseline: 8
  // rhythm : [0, 2, 4, 6];
  // rhythm.px = '1px';
  // rhythm.semi = 0.5;

  // padding
  .p-0 : 0px
  .p-1 : 16px
  .p-2 : 40px
  .p-3 : 56px
  .p-px : 1px
  .p-semi : 4px

  // padding-x
  .px-0 : 0px
  .px-1 : 16px
  .px-2 : 40px
  .px-3 : 56px
  .px-px : 1px
  .px-semi : 4px

  // more padding
  // py, pl, pr, pt, pb

  // all margin sides
  // m, mx, my, ml, mr, mt, mb
  ...

```

### Rhythm - Owl

```js

  // baseline: 8
  // rhythm : [0, 2, 4, 6];
  // rhythm.px = '1px';
  // rhythm.semi = 0.5;

  // padding
  .rhythm-0 : 0px
  .rhythm-1 : 16px
  .rhythm-2 : 40px
  .rhythm-3 : 56px
  .rhythm-px : 1px
  .rhythm-semi : 4px

  // rhythm-x
  .rhythm-x-0 : 0px
  .rhythm-x-1 : 16px
  .rhythm-px-2 : 40px
  .rhythm-px-3 : 56px
  .rhythm-x-px : 1px
  .rhythm-x-semi : 4px

  ...

```

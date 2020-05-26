# Tailwind Compositor Starter Static

Starter kit for [tailwind-compositor](https://github.com/a7sc11u/tailwind-compositor).

Uses, parcel, Postcss, Tailwind and a minimal theme.

### Install

```
  yarn install
  // or
  npm install
```

### Run

```
  yarn develop
  // or
  npm develop
```

### Build

```
  yarn build
  // or
  npm build
```


```
<!--
  p-8 bg-baseline
  padding: rhythm[8]
  background baseline grid
-->

<body class="p-8 bg-baseline">

  <!--
    rhythm-6
    vertical lobotomized owl
    rhythm[6]
  -->
  <main class="rhythm-6">

    <!--
      font-sans-600 text-13/2
      inter semibold
      font-size type[13]
      leading 2 baseline
    -->
    <h1 class="font-sans-600 text-13/2">Hello</h1>

    <!--
      rhythm-3
      vertical lobotomized owl
      rhythm[3]
    -->
    <div class="rhythm-3">

      <!--
        font-sans-400 text-3/2 measure-8
        inter regular
        font-size type[3]
        2 baseline units leading
        max-line-width measure[8]
      -->
      <p class="font-sans-400 text-3/2 measure-8">
        Amet et non nisi ex ex labore irure pariatur enim quis magna amet est
        esse. Dolore ad qui ea laboris labore non anim ad ipsum laborum est.
        Dolor labore officia eiusmod ut Lorem anim tempor nisi quis elit.
        Reprehenderit non non nisi eiusmod labore quis nostrud excepteur
        reprehenderit anim tempor voluptate nulla aute. Lorem id esse veniam
        sint culpa dolor qui veniam magna do ut laborum Lorem.
      </p>

      <!--
        font-sans-400i text-3/2 measure-8
        inter regular italic
        font-size type[3]
        2 baseline units leading
        max-line-width measure[8]
      -->
      <p class="font-sans-400i text-3/2 measure-8">
        Amet et non nisi ex ex labore irure pariatur enim
      </p>
    </div>

    <!--
      px-7 h-7 
      bg-mono-0 hover:bg-mono-2 text-mono-8
      padding-left/right rhythm[7]
      height rhythm[8]
      background-color / text-color
    -->
    <button class="px-7 h-7 bg-mono-0 hover:bg-mono-2 text-mono-8">

      <!--
        font-sans-400 text-4/0
        inter regular
        font-size type[5]
        leading 0
      -->
      <span class="font-sans-400 text-4/0">Click</span>
    </button>
  </main>
</body>
```
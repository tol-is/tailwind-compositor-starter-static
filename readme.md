# Tailwind Compositor Starter Static

Starter kit for [tailwind-compositor](https://github.com/a7sc11u/tailwind-compositor).

Uses, parcel, Postcss, Tailwind and a minimal theme.

### Install

```js
  yarn install
  // or
  npm install
```

### Run

```js
  yarn develop
  // or
  npm develop
```

### Build

```js
  yarn build
  // or
  npm build
```

## Annotated Markup Example

```html
<!-- padding: rhythm[8] -->
<body class="p-8 bg--baseline">
  
  <!-- header flex row -->
  <header class="mb-7 flex flex-row items-center">
    
    <!-- just a round shape --> 
    <div class="bg-mono-0 rounded-full h-8 w-8 mr-2"></div>

    <!-- capheight for vertical centering-->
    <!-- Inter Semibold : 10/0 -->
    <span class="font-sans-600 capheight-10/0">Hello.</span>
    
  </header>

  <!-- owl rhythm[7] -->
  <main class="rhythm-7">

    <!-- nested owl rhythm[3] -->
    <div class="rhythm-3">
      <!-- Inter Regular : baseline 3/2 -->
      <p class="font-sans-400 text-3/2 measure-8">
        Amet et non nisi ex ex labore irure pariatur enim quis magna amet est
        esse. Dolore ad qui ea laboris labore non anim ad ipsum laborum est.
        Dolor labore officia eiusmod ut Lorem anim tempor nisi quis elit.
        Reprehenderit non non nisi eiusmod labore quis nostrud excepteur
        reprehenderit anim tempor voluptate nulla aute. Lorem id esse veniam
        sint culpa dolor qui veniam magna do ut laborum Lorem.
      </p>

      <!-- Inter Regular Italic -->
      <!-- baseline 3/2 -->
      <!-- max-width: measure[8] -->
      <p class="font-sans-400i text-3/2 measure-8">
        Amet et non nisi ex ex labore irure pariatur enim
      </p>
    </div>


    <!-- padding:rhythm[7] & height:rhythm[7]-->
    <!-- bg and color -->
    <button class="px-7 h-7 bg-mono-0 hover:bg-mono-2 text-mono-8">
    
      <!-- Inter Regular : capheight 4/2 -->
      <!-- capheight works for vertical centering text -->
      <span class="font-sans-400 capheight-4/0">Click</span>
      
    </button>
  </main>
</body>
```

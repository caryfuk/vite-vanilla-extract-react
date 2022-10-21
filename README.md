# vanilla-extract

[vanilla-extract](https://vanilla-extract.style/documentation/getting-started/) is a library for writing CSS in JavaScript. It is designed to be used with [React](https://reactjs.org/), but can be used with any JavaScript framework or without one.

Like CSS in JS but without the runtime cost.

## Setup with Vite

```sh
npm create vite@latest vite-vanilla-extract-react -- --template react-ts
cd vite-vanilla-extract-react
npm i --save-dev @vanilla-extract/vite-plugin
npm i @vanilla-extract/css @vanilla-extract/sprinkles @vanilla-extract/dynamic
```

And then, just edit `vite.config.ts` to use the plugin:
```ts
import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin(), react()]
})
```

It was co-created by [Mark Dalgleish](https://twitter.com/markdalgleish) who is also the creator of css modules. And you can see some similarities between the two. It's a bit like css modules, but with typescript as a preprocessor. Instead of writing css, you use typescript which makes it look a bit like yet another css in js library, but it’s not. The css is generated at build time.

## Random thoughts
- With its sprinkles, it's also a bit like tailwind, but your own tailwind that lets you define your own [utility classes](./src/sprinkles.css.ts).
- Recipes make it a bit like Stitches, but with a different syntax.
- Clean boundary between runtime and build time - all that is in css.ts is build time. But you can still call css functions from runtime code.

### Theming
- No need to pass theme via context (theme provider) because it depends on css variables.
- Unlike css variables, we can use nested objects. This is useful for defining a [theme](./src/theme.css.ts).

### Comparison with our latest favorite - Stitches
- Similarly to [Stitches](https://stitches.dev/), you can easily define [variants](./src/components/Button/Button.css.ts)
- No predefined opinionated mappings to theme object using template literals. Instead, you define your own theme object and use it directly.
- Nice autocomplete for everything, thanks to typescript and [CSSType](https://www.npmjs.com/package/csstype).

### Resources
- [Mark Dalgleish - CSS in JS: The future of styling](https://youtu.be/NY5uVr0tWEI)
- [React Finland: Mark Dalgleish – Zero-runtime CSS-in-TypeScript with vanilla-extract](https://www.youtube.com/watch?v=23VqED_kO2Q)
- [setup with create react app](https://sandroroth.com/blog/vanilla-extract-cra)
- [Theming a React Application with Vanilla Extract](https://formidable.com/blog/2021/vanilla-extract/)
- [The unseen performance costs of modern CSS-in-JS libraries in React apps](https://calendar.perfplanet.com/2019/the-unseen-performance-costs-of-css-in-js-in-react-apps/)
import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#813',
    secondary: '#318',
    text: '#222',
    background: '#f8f8f8',
    greys: {
      100: '#f8f8f8',
      200: '#eee',
      300: '#ccc',
      400: '#999',
      500: '#666',
      600: '#444',
      700: '#222',
    },
    /** @deprecated don't use red please */
    red: 'red',
  },
  space: {
    small: '.5em',
    medium: '1em',
    large: '2em',
  }
})

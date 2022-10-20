import { createVar, globalStyle, style } from "@vanilla-extract/css"
import { vars } from '../../theme.css'
import { sprinkles } from '../../sprinkles.css'

export const actionColor = createVar() // this is a scoped variable

export const styles = style({
  vars: {
    [actionColor]: vars.colors.red,
  },
  borderRadius: 8,
  border: "1px solid transparent",
})

// If you need to target a child element, you should make it a separate component
// If you absolutely need to do it without setting up a new component, you can do it this way
globalStyle(`${styles} h2`, {
  textShadow: `0 0 1rem ${vars.colors.greys[100]}`
});

export const container = sprinkles({
  paddingX: {
    mobile: 'small',
    desktop: 'large'
  },
  background: {
    lightMode: 'light',
    darkMode: 'dark'
  },
  color: {
    lightMode: 'dark',
    darkMode: 'light'
  },
})

export const containerTitle = sprinkles({
  paddingY: {
    mobile: 'none',
    desktop: 'small'
  },
})

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
  display: 'flex',
  flexFlow: 'column',
})

// If you need to target a child element, you should make it a separate component
// If you absolutely need to do it without setting up a new component, you can do it this way
globalStyle(`${styles} h2`, {
  outlineStyle: 'dotted',
  outlineWidth: 3,
  outlineColor: vars.colors.greys[400],
  display: 'inline-block',
  margin: '1rem auto',
})

export const container = sprinkles({
  paddingX: {
    mobile: 'small',
    desktop: 'large'
  },
  background: {
    lightMode: 200,
    darkMode: 600
  },
  color: {
    lightMode: 600,
    darkMode: 200,
  },
})

export const containerTitle = sprinkles({
  padding: {
    mobile: 'small',
    desktop: 'medium'
  },
})

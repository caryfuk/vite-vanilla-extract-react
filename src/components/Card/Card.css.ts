import { createVar, style } from "@vanilla-extract/css"
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

export const sprinkleStyles = sprinkles({
  padding: {
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

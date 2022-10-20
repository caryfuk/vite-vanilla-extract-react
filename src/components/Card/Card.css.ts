import { createVar, style } from "@vanilla-extract/css"
import { vars } from '../../theme.css'

export const actionColor = createVar() // this is a scoped variable

export const styles = style({
  vars: {
    [actionColor]: vars.colors.red,
  },
  borderRadius: 8,
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
  backgroundColor: vars.colors.greys[600],
  color: vars.colors.greys[200]
})

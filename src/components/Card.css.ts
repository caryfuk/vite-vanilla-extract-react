import { createVar, style } from "@vanilla-extract/css"

export const actionColor = createVar() // this is a scoped variable

export const styles = style({
  vars: {
    [actionColor]: 'red',
  },
  borderRadius: 8,
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
})

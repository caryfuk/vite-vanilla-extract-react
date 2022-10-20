import { style } from "@vanilla-extract/css"
import { actionColor } from '../Card/Card.css'

export const styles = style({
  borderRadius: 8,
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
  fontSize: "1em",
  fontWeight: 500,
  fontFamily: "inherit",
  backgroundColor: "#1a1a1a",
  cursor: "pointer",
  transition: "border-color 0.25s",
  ":hover": {
    borderColor: actionColor,
  },
})

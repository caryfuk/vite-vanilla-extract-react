import { createVar, style, styleVariants } from "@vanilla-extract/css"
import { actionColor } from '../Card/Card.css'
import { vars } from '../../theme.css'

export const textColor = createVar()

const palette = {
  primary: vars.colors.greys[500],
  secondary: vars.colors.greys[700],
}

export const styles = style({
  borderRadius: 8,
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
  fontSize: "1em",
  fontWeight: 500,
  fontFamily: "inherit",
  backgroundColor: vars.colors.greys[700],
  color: textColor,
  cursor: "pointer",
  transition: "border-color 0.25s",
  ":hover": {
    borderColor: actionColor,
  },
})

// Either one styleVariant parameter with an object of variants
// or two parameters with a list of variants and a function to generate the styles
export const background = styleVariants(
  palette,
  (paletteColor) => ({ background: paletteColor })
);

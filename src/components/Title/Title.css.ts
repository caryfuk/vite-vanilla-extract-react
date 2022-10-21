import {
  recipe,
  RecipeVariants
} from '@vanilla-extract/recipes'
import { sprinkles } from '../../sprinkles.css'
import { vars } from '../../theme.css'

export const title = recipe({
  base: {
    fontSize: '2em',
    lineHeight: '1.1',
  },
  variants: {
    color: {
      primary: { color: vars.colors.primary },
      secondary: { color: vars.colors.secondary },
      // recipes and sprinkles can be combined
      text: sprinkles({ color: { lightMode: 300, darkMode: 500 } }),
    },
  }
})

// Get the type
export type TitleVariants = RecipeVariants<typeof title>

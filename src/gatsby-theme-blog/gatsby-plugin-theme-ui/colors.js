import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const darkBlue = `#007acc`
const prismBackgroundBlue = `#011627`
const lightBlue = `#66E0FF`
const blueGray = `#18191a`
const luxLavender = `rgb(147, 161, 219)`

export default merge(defaultThemeColors, {
  initialColorMode: `dark`,
  sizes: {
    container: 672,
  },
  text: blueGray,
  primary: darkBlue,
  heading: luxLavender,
  modes: {
    dark: {
      background: blueGray,
      primary: luxLavender,
      highlight: prismBackgroundBlue,
    },
    light: {
      primary: luxLavender,
    },
  },
})

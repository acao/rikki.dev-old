/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const darkBlue = `#007acc`
const prismBackgroundBlue = `#001627`
const lightBlue = `#66E0FF`
const blueGray = `#18191a`
const luxLavender = `rgb(147, 161, 219)`
const luxLavenderDark = `rgb(62,68,94)`


export default {
  initialColorMode: `dark`,
  sizes: {
    container: "672",
  },
  text: blueGray,
  primary: darkBlue,
  heading: luxLavender,
  modes: {
    dark: {
      background: blueGray,
      primary: luxLavender,
      highlight: "white",
      secondary: blueGray,
    },
    light: {
      primary: luxLavenderDark,
      background: '#eee',
      body: 'white'
    },
  },
}

import merge from "deepmerge"
import colors from "./colors"

import styles from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/styles"
import prism from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/prism"

import typography from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/typography"

console.log(typography)

export default merge(
  defaultThemeColors,
  merge(typography, {
    initialColorMode: `dark`,
    sizes: {
      container: 672,
    },
    colors,
    fonts: {
      heading: `Montserrat, sans-serif`,
      monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
    },
    styles: {
      ...styles,
      h2: { fontWeight: "normal" },
      PostLink: { fontWeight: "normal" },
    },
    prism,
  })
)

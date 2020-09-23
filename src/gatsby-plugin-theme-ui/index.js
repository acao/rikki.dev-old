import { merge } from "theme-ui"
import { toTheme } from "@theme-ui/typography"
import colors from "./colors"

import typography from "typography-theme-wordpress-2016"

import "typeface-montserrat"

const globalHeaderStyle = {
   fontWeight: "normal"
}

export default merge(toTheme(typography), {
  useBorderBox: false,
  // @ts-ignore
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
    h4: globalHeaderStyle,
    h3: globalHeaderStyle,
    h2: globalHeaderStyle,
    h1: {...globalHeaderStyle, padding: "2rem 0"},
    pre: { margin: "0 0 2 0", borderRadius: 0 },
  },
})

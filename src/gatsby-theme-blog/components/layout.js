// @jsx jsx
import { jsx } from "theme-ui"

import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"

import bgImage from "../../../content/assets/tile.jpg"

export default ({ children, ...props }) => (
  <Styled.root
    css={css({
      backgroundRepeat: "repeat",
      backgroundImage: `url(${bgImage})`,
      minHeight: "95vh",
      paddingTop: "3rem",
    })}
  >
    <style>{`
    body { margin: 0; };
    `}</style>
    <section
      sx={{
        backgroundColor: "background",
        maxWidth: `container`,
        mx: `auto`,
        px: ["2rem", "2rem", "4rem"],
        paddingBottom: "4rem",
      }}
    >
      <Header sx={{ backgroundColor: "background" }} {...props} />
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
          })}
        >
          {children}
        </div>
      </div>
    </section>
  </Styled.root>
)

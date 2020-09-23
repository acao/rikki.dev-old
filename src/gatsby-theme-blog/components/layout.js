// @jsx jsx
import { jsx } from "theme-ui"

import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"
import colors from "../../gatsby-plugin-theme-ui/colors"

export default ({ children, location, title, ...props }) => (
  <Styled.root
    css={css({
      minHeight: "95vh",
      paddingTop: "3rem",
    })}
    sx={{ backgroundColor: 'background'}}
  >
    <style>{`
    body { margin: 0; };
    `}</style>
    <section
      sx={{
        backgroundColor: "body",
        maxWidth: `container`,
        mx: `auto`,
        px: ["2rem", "2rem", "4rem"],
        paddingBottom: "4rem",
      }}
    >
      <Header
        location={location}
        title={title}
        sx={{ backgroundColor: "background" }}
        children={null}
      />
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

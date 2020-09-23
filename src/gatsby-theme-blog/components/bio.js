/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Styled, css, Flex } from "theme-ui"
import BioContent from "./bio-content"

const Bio = () => {
  const data = useStaticQuery(bioQuery1)
  const {
    site: {
      siteMetadata: { author, social },
    },
    avatar,
  } = data
  return (
    <Flex css={css({ mb: 4, alignItems: `center` })}>
      {avatar ? (
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          css={css({
            mr: 3,
            mb: 0,
            width: 60,
            minWidth: 60,
            borderRadius: 99999,
          })}
        />
      ) : (
        <div
          css={css({
            mr: 3,
            mb: 0,
            width: 60,
            minWidth: 60,
            borderRadius: 99999,
          })}
          role="presentation"
        />
      )}
      <Styled.div>
        <BioContent />

        <Styled.div>
          {social.map((s, i) => {
            const isFirst = i === 0
            return [
              <Styled.a
                css={{
                  display: "inline-block",
                  paddingRight: isFirst ? ".5rem" : 0,
                  paddingLeft: isFirst ? 0 : ".5rem",
                }}
                key={`social-${i}`}
                href={s.url}
                target="_new"
              >
                ({s.name})
              </Styled.a>,
              i === 0 && " - ",
            ]
          })}
        </Styled.div>
      </Styled.div>
    </Flex>
  )
}

const bioQuery1 = graphql`
  query BioQuery1 {
    site {
      siteMetadata {
        author
        social {
          url
          name
        }
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio

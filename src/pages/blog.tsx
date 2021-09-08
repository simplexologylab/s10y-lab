import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styled from 'styled-components'

import { HoverGrow } from '../components/animations'
import SEO from '../components/seo'

import { ResponsiveContext, Box, Text } from 'grommet'

const SiteLink = styled(Link)`
  text-decoration: none;
  color: gray;

  &:hover {
    font-size: 2rem;
  }
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Our Blog" />

      <ResponsiveContext>
        {size => (
          <Box
            fill
            pad="medium"
            background="white"
            direction="row-responsive"
            justify="center"
            gap="small"
          >
            <Box gap="small" animation="fadeIn">
              {data.pages.nodes.map(({ id, frontmatter, fields }) => (
                <SiteLink to={fields.slug}>
                  <Box
                    width={size !== 'small' && 'large'}
                    border={{ color: 'dark-1', size: 'large', side: 'top' }}
                    gap="small"
                    pad="medium"
                    key={id}
                  >
                    <Text color="dark-3" size="small">
                      {frontmatter.date}
                    </Text>
                    <Text weight="bold" size="large">
                      {frontmatter.title}
                    </Text>
                    {size === 'small' ? (
                      <Box gap="small" direction="row">
                        <Box width="70vw">
                          <Text size="small">{frontmatter.description}</Text>
                        </Box>
                        <Box width="30vw">
                          <Img
                            key={id}
                            fluid={frontmatter.image.childImageSharp.fluid}
                          />
                        </Box>
                      </Box>
                    ) : (
                      <Box direction="row" gap="small">
                        <Box width="medium">
                          <Text size="small">{frontmatter.description}</Text>
                        </Box>
                        <Box width="medium">
                          <Img
                            key={id}
                            fluid={frontmatter.image.childImageSharp.fluid}
                          />
                        </Box>
                      </Box>
                    )}
                  </Box>
                </SiteLink>
              ))}
            </Box>
          </Box>
        )}
      </ResponsiveContext>
    </Layout >
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    lightbulb: file(relativePath: { eq: "lightbulb-white.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pages: allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
      nodes {
        id
        fileAbsolutePath
        frontmatter {
          title
          description
          date
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`

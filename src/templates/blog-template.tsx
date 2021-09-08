import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Box, Text, Heading, Paragraph } from 'grommet'

import Layout from '../components/layout'

const shortcodes = { Link }

// a good one: https://cucumber.io/blog/bdd/example-mapping-introduction/

const BlogTemplate = ({ data: { mdx } }: any) => (
  <Layout>
    <Box fill pad={{ horizontal: "xlarge" }} align="center" gap="small">
      <Box width="medium" animation="fadeIn">
        <Img fluid={mdx.frontmatter.image.childImageSharp.fluid} />
      </Box>
      <Heading level="2" textAlign="center" alignSelf="center" margin="small">
        {mdx.frontmatter.title}
      </Heading>
      <Box
        elevation="small"
        background="dark-1"
        pad="medium"
        round="small"
        width="large"
        align="center"
        gap="small"
      >
        <Text size="xlarge" color="accent-1">
          Simply Put
        </Text>
        <Paragraph fill margin="none">
          {mdx.frontmatter.description}
        </Paragraph>
      </Box>
      <Box width="large">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Box>
    </Box>
  </Layout>
)


export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogTemplate
import React from "react"
import { Link, graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { Grommet, Box, Button, Heading, ResponsiveContext } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import styled from 'styled-components';

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Grommet>
        <ResponsiveContext.Consumer>
          { size => (
            <Box>
              <Box>{post.frontmatter.title}</Box>
              <Box><MDXRenderer>{post.code.body}</MDXRenderer></Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
      
      
      // <Layout location={this.props.location} title={siteTitle}>
      //   <SEO title={post.frontmatter.title} description={post.excerpt} />
      //   <h1>{post.frontmatter.title}</h1>
      //   <p
      //     style={{
      //       ...scale(-1 / 5),
      //       display: `block`,
      //       marginBottom: rhythm(1),
      //       marginTop: rhythm(-1),
      //     }}
      //   >
      //     {post.frontmatter.date}
      //   </p>
      //   <MDXRendrer>{post.node.code.body}</MDXRendrer>
      //   <hr
      //     style={{
      //       marginBottom: rhythm(1),
      //     }}
      //   />
      //   <Bio />

      //   <ul
      //     style={{
      //       display: `flex`,
      //       flexWrap: `wrap`,
      //       justifyContent: `space-between`,
      //       listStyle: `none`,
      //       padding: 0,
      //     }}
      //   >
      //     <li>
      //       {previous && (
      //         <Link to={previous.fields.slug} rel="prev">
      //           {previous.frontmatter.title}
      //         </Link>
      //       )}
      //     </li>
      //     <li>
      //       {next && (
      //         <Link to={next.fields.slug} rel="next">
      //           {next.frontmatter.title} →
      //         </Link>
      //       )}
      //     </li>
      //   </ul>
      // </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`

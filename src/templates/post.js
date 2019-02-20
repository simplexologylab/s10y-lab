import React from "react"
import { navigate, graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { Grommet, Box, Button, Heading, ResponsiveContext } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import styled from 'styled-components';

import ScrollMeter from '../components/ScrollMeter';

const SiteHeading = styled(Button)`
  font-family: 'Rajdhani';
`;

const TitleHeading = styled(Heading)`
  font-family: 'Shadows Into Light';
`;

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Grommet>
        <Box direction="row" margin="xsmall">
          <Button plain label="back" icon={<LinkPrevious />} onClick={() => window.history.back()} />
          <Box align="end" jusify="end" margin="xsmall" fill>
            <SiteHeading plain label={siteTitle} onClick={() => navigate(`/`)} />
            <TitleHeading level='1' size="small" margin="small">{post.frontmatter.title}</TitleHeading>                  
          </Box>
        </Box>
        <ScrollMeter />
        <ResponsiveContext.Consumer>
          { size => (
            <Box>
              <Box>{post.frontmatter.title}</Box>
              <Box><MDXRenderer>{post.code.body}</MDXRenderer></Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
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

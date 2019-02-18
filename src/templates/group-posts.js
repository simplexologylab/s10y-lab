import React from "react";
import { graphql, Link, navigate } from "gatsby"
import Img from 'gatsby-image';
import styled from 'styled-components';

import {Grommet, Box, Heading, Paragraph, Button} from 'grommet';
import { LinkPrevious } from 'grommet-icons';

const SiteHeading = styled(Button)`
  font-family: 'Rajdhani';
`;

const TitleHeading = styled(Heading)`
  font-family: 'Shadows Into Light';
`;

class GroupPostsTemplate extends React.Component {
    render(){
        const pageInfo = this.props.data.mdx;
        const subPages = this.props.data.allMdx.edges;
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <Grommet>
              <Box>
                <Box direction="row" margin="xsmall">
                  <Button plain label="projects" icon={<LinkPrevious />} onClick={() => navigate('/projects')} />
                  <Box align="end" jusify="end" margin="xsmall" fill>
                    <SiteHeading plain label={siteTitle} onClick={() => navigate(`/`)} />
                    <TitleHeading level='1' size="small" margin="small">{pageInfo.frontmatter.title}</TitleHeading>                  
                  </Box>
                </Box>
              </Box>
              <Box pad={{"horizontal": "xlarge"}}>
              
                {subPages.map(page => {
                    if(page.node.frontmatter.image) {
                        return (
                            <Link to={page.node.fields.slug} id={page.node.id}>
                              <Box direction="row-responsive" fill="horizontal">
                                <Box pad="small" flex size="small">
                                  <Img fluid={page.node.frontmatter.image.childImageSharp.fluid} />
                                </Box>
                                <Box justify="center" pad="small" background="neutral-1" round elevation="large">
                                  <Heading margin="xsmall">{page.node.frontmatter.title}</Heading>
                                  <Paragraph>{page.node.excerpt}</Paragraph>
                                  <Button label="Open" />
                                </Box>
                              </Box>
                            </Link>
                        )
                    }
                    return (
                      <Link to={page.node.fields.slug}>
                        <Box background="dark-1" align="center" pad="small" round margin="small" elevation="large">
                          <Heading margin="xsmall">{page.node.frontmatter.title}</Heading>
                          <Paragraph textAlign="center">{page.node.excerpt}</Paragraph>
                          <Button label="Open" />
                        </Box>
                      </Link>
                    )
                })}
              </Box>
            </Grommet>
        )
    } 
}

export default GroupPostsTemplate;

export const PostsBySlugQuery = graphql`
query PostsBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(
      filter:{
        fileAbsolutePath: {regex: $slug},
        fields: { slug: {ne: $slug}}
      }
    ){
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter{
            title
            image {
                childImageSharp {
                    fluid(maxWidth:600) {
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
    mdx(
        fields: {slug: { eq: $slug}}
    ){
        id
        excerpt(pruneLength: 160)
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
        }
    }
  }
`
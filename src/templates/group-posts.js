import React from "react";
import { graphql, navigate } from "gatsby"
import Img from 'gatsby-image';
import styled from 'styled-components';

import {Grommet, Grid, Box, Heading, Paragraph, Button, ResponsiveContext} from 'grommet';
import { LinkPrevious } from 'grommet-icons';

const SiteHeading = styled(Button)`
  font-family: 'Rajdhani';
`;

const TitleHeading = styled(Heading)`
  font-family: 'Shadows Into Light';
`;

const PostCard = ({title, description, image, slug}) => (
  <Button onClick={() => navigate(slug)}>
      <Box background="light-2" round elevation="medium">
        <Heading margin="small" size="small">{title}</Heading>
        <Box flex>{image && <Img fluid={image} />}</Box>
        <Paragraph margin="none">{description}</Paragraph>
      </Box>
  </Button>
)

class GroupPostsTemplate extends React.Component {
  resizeGrid = (size) => {
    switch(size) {
      case 'medium': return {count: 2, size: "auto"}
      case 'large': return {count: 3, size: "auto"}
      case 'xlarge': return {count: 4, size: "auto"}
      default: return "auto"
    }
  }  
  
  render(){
        const pageInfo = this.props.data.mdx;
        const subPages = this.props.data.allMdx.edges;
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <Grommet>
              <Box>
                <Box direction="row" margin="xsmall">
                  <Button plain label="back" icon={<LinkPrevious />} onClick={() => navigate('/projects')} />
                  <Box align="end" jusify="end" margin="xsmall" fill>
                    <SiteHeading plain label={siteTitle} onClick={() => navigate(`/`)} />
                    <TitleHeading level='1' size="small" margin="small">{pageInfo.frontmatter.title}</TitleHeading>                  
                  </Box>
                </Box>
              </Box>
                <ResponsiveContext.Consumer>
                  { size => (
                    <Box pad={size}>
                      <Grid
                        columns={this.resizeGrid(size)}
                        gap="medium"
                      >
                        {subPages.map(page => {
                          if(page.node.frontmatter.image) {
                            return (
                              <PostCard
                                key={page.id}
                                title={page.node.frontmatter.title}
                                description={page.node.frontmatter.description}
                                image={page.node.frontmatter.image.childImageSharp.fluid}
                                slug={page.node.fields.slug}
                              />
                            )
                          }
                          return (
                            <PostCard 
                              key={page.id}
                              title={page.node.frontmatter.title}
                              description={page.node.frontmatter.description}
                              slug={page.node.fields.slug}
                            />
                          )
                        })
                        }
                      </Grid>
                    </Box>
                  )}
                </ResponsiveContext.Consumer>
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
          frontmatter{
            title
            description
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
        frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
        }
    }
  }
`
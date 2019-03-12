import React from "react";
import { graphql, navigate } from "gatsby"
import Img from 'gatsby-image';
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import styled from 'styled-components';

import {Grommet, Grid, Box, Heading, Button, ResponsiveContext } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

import Sitemap from '../components/Sitemap';
import Purchase from '../components/Purchase';

const ButtonBox = styled(Box)`
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  &:hover {
    border-left: solid 5px #00ff00;
  }
`;

const SiteHeading = styled(Button)`
  font-family: 'Rajdhani';
`;

const TitleHeading = styled(Heading)`
  font-family: 'Shadows Into Light';
`;

const ImageBox = styled(Box)`
  object-fit: cover;
`;

const PostCard = ({title, description, image, slug}) => (
  <Button onClick={() => navigate(slug)}>
    <ButtonBox 
      round={{"size": "xsmall", "corner": "right"}} 
      margin={{ "vertical": "small" }} 
      background="dark-2"
      alignContent="center"
    >
      <Grid columns={["1/3", "auto"]}>
        <ImageBox>{image && <Img fluid={image} />}</ImageBox>
        <Heading alignSelf="center" level="3" margin={{"vertical": "none", "horizontal": "small"}} size="small">{title}</Heading>
      </Grid>
    </ButtonBox>
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
            <Grommet full>
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
                    <Box>
                      <Grid
                        columns={(size !== "small") ? { count: 2, size: "auto" } : "auto"}
                      >
                        <Box pad="small">
                          <MDXRenderer>{pageInfo.code.body}</MDXRenderer>
                        </Box>
                        <Box pad="medium">
                          <Img fluid={pageInfo.frontmatter.image.childImageSharp.fluid} />
                          <Purchase items={this.props.data.allFile} />
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
                        </Box>
                      </Grid>
                    </Box>
                  )}
                </ResponsiveContext.Consumer>
                <Sitemap />
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
    allFile(
      filter:{
        relativePath: {regex: $slug}
        extension: {eq: "json"}
      }
    ){
      totalCount
      edges {
        node {
          childJson {
            product
            details
            generalLink
            amazonShortLink
            amazonFullLink
            amazonImage
          }
        }
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
        purchase
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth:600) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`
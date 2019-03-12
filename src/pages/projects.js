import React from "react"
import { graphql, navigate } from "gatsby"
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Grommet, Grid, Box, Button, Stack, Heading } from 'grommet';
import SEO from "../components/seo"
import Sitemap from '../components/Sitemap';
import Menu from '../components/Menu';

const Image = styled(Img)`
  height: 25vh;
  border-radius: 10px;
`;

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const projects = data.allMdx.edges
    const groups = projects.filter(project => project.node.fields.slug.split("/").length === 3);

    return (
      <Grommet>
        <SEO
          title="All projects"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Menu />
        <Box pad="small">
          <Grid
            columns={{
              count: 2,
              size: "auto"
            }}
            gap="small"
          >
            {groups.map(({ node }) => (
                <Button onClick={() => navigate(node.fields.slug)}>
                  <Box>
                    <Stack>
                      <Image 
                        key={node.frontmatter.title} 
                        fluid={node.frontmatter.image.childImageSharp.fluid} />
                      <Heading level="2" size="medium">
                        {node.frontmatter.title}
                      </Heading>
                    </Stack>
                  </Box>
                </Button>
              )
            )}
          </Grid>
        </Box>
        <Sitemap />
      </Grommet>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                  fluid(maxWidth:600) {
                      ...GatsbyImageSharpFluid
                  }
              }
            } 
          }
        }
      }
    }
    logo: file(relativePath: { eq: "logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    },
  }
`

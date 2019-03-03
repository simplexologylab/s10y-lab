import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import { Grommet, Stack, Box, Heading } from 'grommet';
import styled from 'styled-components';

import SEO from "../components/seo"
import TextSplit from "../components/Text/Split";
import Sitemap from "../components/Sitemap";
// import { rhythm } from "../utils/typography"

const HeroImage = styled(Img)`
  height: 95vh;
`;

const HeroBox = styled(Box)`
  background-color: hsla(0, 5%, 62%, 0.46);
`;

const HeroText = styled(Heading)`
  font-family: 'Rajdhani';
`;

class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges
    // const groups = posts.filter(post => post.node.fields.slug.split("/").length === 3);

    return (
      <Grommet>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Box elevation="medium">
          <Stack anchor='center'>
            <HeroImage fluid={data.hero.childImageSharp.fluid} />
            <HeroBox animation="zoomOut" align="center" width="90vw">
              <HeroText level="1" size="large" margin="small">MAKE IT SIMPLE.</HeroText>
              <HeroText level="2" textAlign="center" size="small" margin="small">Learn something new with us in the Simplexology Lab</HeroText>
            </HeroBox>
          </Stack>
        </Box>
        <Box gap="small">
          <TextSplit
            title="Get started"
            text="Explore and get inspired to learn something new, we'll make it as simple as possilbe."
            image={data.rocks.childImageSharp.fluid}
            buttonText="Go To Projects"
            buttonLink="/projects"
          />
          <TextSplit 
            title="Who we are"
            text="Just people who love seeing Science, Math, and Technology used in the real world and helping others realize it's not that complicated."
            image={data.geometry.childImageSharp.fluid}
            buttonText="Learn About Us"
            buttonLink="/about"
            flip
          />
          <TextSplit 
            title="How can we help you?"
            text="Check out our professional services or reach out directly to see how we can help you make something simple."
            image={data.handshake.childImageSharp.fluid}
            buttonText="Contact Us"
            buttonLink="/contact"
            dark
          />
        </Box>
        <Sitemap />
      </Grommet>
    )
  }
}

export default Home

export const imageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    hero: file(relativePath: { eq: "lab-table.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
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
    geometry: file(relativePath: { eq: "geometry.jpg"}) {
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
    rocks: file(relativePath: { eq: "rocks.jpg"}) {
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
    handshake: file(relativePath: { eq: "handshake.jpg"}) {
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
    }
  }
`;
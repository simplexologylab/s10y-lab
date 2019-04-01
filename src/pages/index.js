import React from 'react';
import { graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import { Grommet, Stack, Box, Heading, Button } from 'grommet';
import { InProgress, DocumentTest, Bug, Workshop, Deploy, ChatOption, Trophy } from 'grommet-icons';
import styled from 'styled-components';

import SEO from '../components/seo';
import TextSplit from '../components/Text/Split';
import Sitemap from '../components/Sitemap';
import Menu from '../components/Menu';
import IconText from '../components/IconText';
import Social from '../components/Social';
import RotatorCard from '../components/Rotator/RotatorCard';
import Rotator from '../components/Rotator/Rotator';

// import { rhythm } from "../utils/typography"

// 3dmaav17jtf6mmrm3e3nefngq3 App Client ID
// https://github.com/dabit3/gatsby-auth-starter-aws-amplify/tree/master/amplify
// https://hackernoon.com/building-jamstack-applications-with-gatsby-and-aws-amplify-framework-d7e2b9e7117e

const HeroImage = styled(Img)`
  height: 60vh;
`;

const MainHeading = styled(Heading)`
  font-family: 'Rajdhani';
  font-size: 10vh;
  color: white;
`;

class Home extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    let projects = data.allMdx.edges.filter(project => project.node.fields.slug.split('/').length === 3);

    return (
      <Grommet>
        <SEO title={siteTitle} keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

        <Stack>
          <Box>
            <Stack anchor="bottom">
              <HeroImage fluid={data.hero.childImageSharp.fluid} />
              <Box width="80vw" gap="large" margin="large">
                <MainHeading margin="small">we</MainHeading>
                <MainHeading margin="small">make it</MainHeading>
                <MainHeading margin="small">simple</MainHeading>
              </Box>
            </Stack>
          </Box>
          <Box background="light-1" margin="medium" round="small" elevation="xlarge">
            <Menu />
          </Box>
        </Stack>
        <Box align="center" pad="small">
          <Rotator duration={5000}>
            {projects.map(({node}) => (
                <RotatorCard 
                  heading={node.frontmatter.title} 
                  text={node.frontmatter.description} 
                  image={node.frontmatter.image.childImageSharp.fluid}
                  slug={node.fields.slug}
                />
              )
            )}
          </Rotator>
          <Box width="50vw" alignSelf="center" margin="small" >
            <Button label="See All Projects" color="accent-1" onClick={()=>navigate('/projects')} />
          </Box>
        </Box>
        <Box pad={{"vertical": "xlarge"}} background="dark-1" justify="center" align="center">
          <Box gap="large">
            <IconText icon={<InProgress size="2rem" />} text="You're time is valuable" /> 
            <IconText icon={<DocumentTest size="2rem" />} text="We formulate the projects" />
            <IconText icon={<Bug size="2rem" />} text="Then work out the bugs" />
            <IconText icon={<Workshop size="2rem" />} text="Next we'll show you what we did" />
            <IconText icon={<Deploy size="2rem" />} text="Allowing you to do it blazing fast" />
            <IconText icon={<ChatOption size="2rem" />} text="We'll help along the way" />
            <IconText icon={<Trophy size="2rem" />} text="You become a super hero" />
            <Button label="Learn More About Us" onClick={()=>navigate('/about')} />
          </Box>
        </Box>
        <Box height="xsmall" justify="center" align="center">
          <Social text="find us here | " />
        </Box>
        {/* <Box gap="small">
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
        </Box> */}
        <Sitemap />
      </Grommet>
    );
  }
}

export default Home;

export const homeQuery = graphql`
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
    }
    hero: file(relativePath: { eq: "lab-table.jpg" }) {
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
    }
    geometry: file(relativePath: { eq: "geometry.jpg" }) {
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
    rocks: file(relativePath: { eq: "rocks.jpg" }) {
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
    handshake: file(relativePath: { eq: "handshake.jpg" }) {
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

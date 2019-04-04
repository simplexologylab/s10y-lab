import React from 'react';
import { graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import { Grommet, Stack, Box, Heading, Button } from 'grommet';
import { DocumentTest, Bug, Workshop, Deploy, Connect } from 'grommet-icons';
import styled from 'styled-components';

import SEO from '../components/seo';
import Sitemap from '../components/Sitemap';
import Menu from '../components/Menu';
import IconText from '../components/IconText';
import RotatorCard from '../components/Rotator/RotatorCard';
import Rotator from '../components/Rotator/Rotator';

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
            {projects.map(({ node }) => (
              <RotatorCard
                key={node.frontmatter.title}
                heading={node.frontmatter.title}
                text={node.frontmatter.description}
                image={node.frontmatter.image.childImageSharp.fluid}
                slug={node.fields.slug}
              />
            ))}
          </Rotator>
          <Box width="50vw" alignSelf="center" margin="small">
            <Button label="See All Projects" color="accent-1" onClick={() => navigate('/projects')} />
          </Box>
        </Box>
        <Box pad={{ vertical: 'xlarge' }} background="dark-1" justify="center" align="center">
          <Box gap="large">
            <IconText icon={<DocumentTest size="2rem" />} text="We Take Complex Projects" />
            <IconText icon={<Bug size="2rem" />} text="Work Out The Bugs" />
            <IconText icon={<Workshop size="2rem" />} text="Then Make It Simple" />
            <IconText icon={<Deploy size="2rem" />} text="So All Can Understand" />
            <IconText icon={<Connect size="2rem" />} text="No Strings Attached" />
            <Button label="Why we're different" onClick={() => navigate('/about')} />
          </Box>
        </Box>
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

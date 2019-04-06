import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { Grommet, Box, Heading } from 'grommet';

import config from '../../static/site-config';
import Menu from '../components/Menu';
import Sitemap from '../components/Sitemap';
import ScrollMeter from '../components/ScrollMeter';

import Mission from '../components/About/Mission';
import AboutUs from '../components/About/AboutUs';
import AboutProjects from '../components/About/AboutProjects';

class AboutPage extends Component {
  render() {
    const { data } = this.props;

    return (
      <Grommet>
        <Helmet title={`About | ${config.siteTitle}`} />
        <Menu />
        <ScrollMeter />
        <Box animation="fadeIn" align="center" fill>
          <Mission />
        </Box>
        <AboutUs stackImage={data.kid.childImageSharp.fluid} splitImage={data.spark.childImageSharp.fluid} />
        <Box>
          <Heading>About Our Projects</Heading>
        </Box>
        <AboutProjects />
        <Sitemap />
      </Grommet>
    );
  }
}

export default AboutPage;

export const imageQuery = graphql`
  query {
    kid: file(relativePath: { eq: "kid-suprised.jpg" }) {
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
    spark: file(relativePath: { eq: "spark.jpg" }) {
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
  }
`;

import React, { Component } from 'react';
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Grommet, Box, Heading, Paragraph } from 'grommet';
import Img from 'gatsby-image';
import styled from 'styled-components';

import config from "../../static/site-config";
import Menu from "../components/Menu";
// import Typer from '../components/typer';
import Sitemap from "../components/Sitemap";
import Split from "../components/Text/Split";
import ScrollMeter from "../components/ScrollMeter";

const FontHeading = styled(Heading)`
  font-family: 'Shadows Into Light';
`;

const TypeHeading = styled(Heading)`
  font-family: 'VT323';
  color: #3EE905;
`;

class AboutPage extends Component {
  render() {
    const { data } = this.props;

    return (
      <Grommet>
        <Helmet title={`About | ${config.siteTitle}`} />
        <Menu />
        <ScrollMeter />
        <Box elevation="small">
          <Box margin="small" align="center">
            <FontHeading level="2" size="xlarge">make it simple</FontHeading>
            <Box animation={["fadeIn"]} align="center" pad="small">
              {/* <Paragraph margin="none" textAlign="center" size="large">
                we are 
                {" "}
                <Typer rotate={["parents", "kids", "professionals", "nerds", "makers", "DIYers"]} />
              </Paragraph>
              <Paragraph textAlign="center" size="large">
                with a drive and passion to make the seemingly
                complex technology that surrounds our lives, easier to
                understand so that it might inspire others.
              </Paragraph> */}
              <Paragraph textAlign="center" size="large">
                We have a drive and passion to make the seemingly
                complex technology that surrounds our lives, easier to
                understand so that it might inspire others.
              </Paragraph>            
            </Box>
          </Box>
          <Img fluid={data.thought.childImageSharp.fluid} />
          <Box background="dark-1" pad="medium" margin="large" elevation="medium" round>
            {/* <TypeHeading level="2" size="xlarge">
              {" > "}
              <Typer rotate={['hello, world']} />
            </TypeHeading> */}
            <Paragraph size="large" alignSelf="center">
              We all remember the moment in the time that 
              inspired us to pursue a hobby, passion, and/or career.
              One of the most common for us was seeing "hello, world!"
              display on a computer screen.
            </Paragraph>
          </Box>
          <Split 
            text="Here in the lab we refer to those moments as sparks
              and our inspiration lives in generating as many sparks 
              as possible. Our hope is that our easy to understand, simple, high quality content is used
              to inspire students trying to determine a career path, teachers wanting to trying something new
              businesses needing a new perspective, parents helping their children explore their interest, and 
              any individual that wants to learn something new." 
            textSize="medium"
            image={data.spark.childImageSharp.fluid} 
          />
        </Box>
        <Sitemap />
      </Grommet>
    )
  }
}

export default AboutPage;

export const imageQuery = graphql`
  query {
    thought: file(relativePath: { eq: "thought.jpg"}) {
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
    spark: file(relativePath: { eq: "spark.jpg"}) {
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
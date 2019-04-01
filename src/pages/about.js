import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Grommet, Box, Heading, Paragraph, Tabs, Tab, Text } from 'grommet';
import Img from 'gatsby-image';
import styled from 'styled-components';

import config from '../../static/site-config';
import Menu from '../components/Menu';
// import Typer from '../components/typer';
import Sitemap from '../components/Sitemap';
import Split from '../components/Text/Split';
import ScrollMeter from '../components/ScrollMeter';

const FontHeading = styled(Heading)`
  font-family: 'Shadows Into Light';
`;

const Mission = styled(Paragraph)`
  font-family: 'Fira Sans';
  font-size: 2rem;
`;

const SpecialText = styled(Text)`
  color: #3EE905;
  font-size: 2.5rem;
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
        <Box>
          <Box margin="small" align="center">
            <Box animation={['fadeIn']} align="center">
              <Mission textAlign="center" size="xlarge">
                Our mission is to <SpecialText size="xlarge">understand</SpecialText> the seemingly complex world around us and to <SpecialText size="xlarge">inspire</SpecialText> learning by <SpecialText size="xlarge">making it simple</SpecialText>
              </Mission>
              <Box>
                <Tabs>
                  <Tab title="for parents">
                    <Box background="accent-1" margin="small" pad="medium" align="center" animation="fadeIn" round="small" elevation="medium">
                      <Paragraph textAlign="center" size="medium">
                        We are here to support parents who have an active role in their child's education and who understand that learning shouldn't end in the classroom.
                        Each of our projects are designed to showcase specific interest areas so that you as a parent know what possible education paths are for your child to know where to dig deeper and spark an interest.
                        You can learn from our mistakes and we're always here to help answer questions, so that you don't have to worry. Who knows, maybe your kids will think you're some kind of super hero.
                      </Paragraph>
                    </Box>
                  </Tab>
                  <Tab title="for teachers">
                    <Box background="accent-1" margin="small" pad="medium" align="center" animation="fadeIn" round="small" elevation="medium">
                      <Paragraph textAlign="center" size="medium">
                      We are here to support teachers looking for interesting ways to inspire their students.
                      It is hard enough to keep up with kids today and when compounded with the rate at which technology changes, it is almost impossible.
                      Our projects are designed to be simple enough any teach can pick them up to create opporunties for learning in their classroom, we'll work out the bugs and provide support to ensure you look like a rock star.
                      </Paragraph>
                    </Box>
                  </Tab>
                  <Tab title="for individuals">
                    <Box background="accent-1" margin="small" pad="medium" align="center" animation="fadeIn" round="small" elevaton="medium">
                      <Paragraph textAlign="center" size="medium">
                        We are here to support any individual who is looking to find a new hobby, change a career, or who just wants to learn something new.
                        All of our projects are designed so that you can dive right in knowing that we've already worked out the bugs and wil be there to support you when you have quetions. 
                      </Paragraph>
                    </Box>
                  </Tab>
                </Tabs>
              </Box>
            </Box>
          </Box>
          <Box background="dark-1" pad="medium" margin="large" elevation="medium" round align="center">
            <TypeHeading level="2" size="xlarge" margin={{"vertical": "small"}}>
              hello, world!
            </TypeHeading>
            <Paragraph size="large" alignSelf="center">
              We all remember the moment in the time that inspired us to pursue a hobby, passion, and/or career. One of
              the most common for us was seeing "hello, world!" display on a computer screen.
            </Paragraph>
          </Box>
          <Split
            text="Here in the lab we refer to those moments as sparks
              and our inspiration lives in generating as many sparks 
              as possible."
            textSize="medium"
            image={data.spark.childImageSharp.fluid}
          />
        </Box>
        <Sitemap />
      </Grommet>
    );
  }
}

export default AboutPage;

export const imageQuery = graphql`
  query {
    thought: file(relativePath: { eq: "thought.jpg" }) {
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

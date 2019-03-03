import React from 'react'
import { Box, Grid, Heading, Paragraph, Button, ResponsiveContext } from 'grommet';
import { navigate } from 'gatsby';

import Img from "gatsby-image";
import styled from 'styled-components';

const RoundedImageLeft = styled(Img)`
  border-radius: 0px 50px 50px 0px;
  box-shadow: 0 8px 6px -6px #111111;
`;

const RoundedImageRight = styled(Img)`
  border-radius: 50px 0px 0px 50px;
  box-shadow: 0 8px 6px -6px #111111;
`;

const NavButton = ({link, text}) => (
  <Button
    label={text}
    onClick={()=>navigate(link)}
  />
)

export default ({title, text, image, textSize, flip, dark, buttonText, buttonLink}) => (
  <ResponsiveContext.Consumer>
    { size => (
      <Box background={dark && "dark-1"} pad={{"vertical": "medium"}}>
        {flip ? (
          <Box direction={size === 'small' ? "column" : "row"}>
            <Box justify="center" flex>
              {(size === 'small') ? <Img fluid={image} /> : <RoundedImageLeft fluid={image} /> }
            </Box>
            <Box align="center" justify="center" pad={size}>
              {title && <Heading>{title}</Heading>}
              <Paragraph textAlign="center" size={textSize ? textSize : size}>{text}</Paragraph>
              {buttonText && <NavButton text={buttonText} link={buttonLink} />}
            </Box>
          </Box>
          ) : (
          <Box direction={size === 'small' ? "column" : "row"}>
            <Box align="center" justify="center" pad={size}>
              {title && <Heading>{title}</Heading>}
              <Paragraph textAlign="center" size={textSize ? textSize : size}>{text}</Paragraph>
              {buttonText && <NavButton text={buttonText} link={buttonLink} />}
            </Box>
            <Box justify="center" flex>
              {(size === 'small') ? <Img fluid={image} /> : <RoundedImageRight fluid={image} /> }
            </Box>
          </Box>
        )}  
      </Box>
    )}
  </ResponsiveContext.Consumer>
)

/* Working sample for usage
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
*/
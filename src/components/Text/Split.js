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
      <Box bacbkground={dark && "dark-1"} pad={{"vertical": "medium"}}>
      {/* <Box>
        <Heading>{title}</Heading>
        <Paragraph>{text}</Paragraph>
        <Button label={buttonText} onClick={() => navigate(buttonLink)} />
      </Box> */}
          {flip ? (
            <Box direction={size === 'small' ? "column" : "row"}>
              <Box justify="center" flex>
                {(size === 'small') ? <Img fluid={image} /> : <RoundedImageLeft fluid={image} /> }
              </Box>
              <Box align="center" justify="center" pad={size}>
                {title && <Heading>{title}</Heading>}
                {size}
                <Paragraph textAlign="center" size={textSize ? textSize : size}>{text}</Paragraph>
                {buttonText && <NavButton text={buttonText} link={buttonLink} />}
              </Box>
            </Box>
            ) : (
            <Box direction={size === 'small' ? "column" : "row"}>
              <Box align="center" justify="center" pad={size}>
                {title && <Heading>{title}</Heading>}
                {size}
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
<Split 
  text="Lorem ipsum dolor amet ugh humblebrag pinterest vaporware, everyday carry hell of godard DIY before they sold out craft beer sriracha four dollar toast next level. Williamsburg stumptown gentrify photo booth occupy man bun. Cornhole gochujang whatever, la croix hella hoodie green juice hammock health goth migas ennui normcore austin. Freegan etsy roof party tattooed fixie."
  image={this.props.data.hero.childImageSharp.fluid}
  dark
/>
<Split 
  text="Lorem ipsum dolor amet ugh humblebrag pinterest vaporware, everyday carry hell of godard DIY before they sold out craft beer sriracha four dollar toast next level. Williamsburg stumptown gentrify photo booth occupy man bun. Cornhole gochujang whatever, la croix hella hoodie green juice hammock health goth migas ennui normcore austin. Freegan etsy roof party tattooed fixie."
  image={this.props.data.hero.childImageSharp.fluid} 
  flip
/>
*/
import React from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';

import { Box, ResponsiveContext, Button, Text } from 'grommet';
import styled from 'styled-components';

const RotateHeading = styled(Text)`
  font-family: 'Shadows Into Light';
  font-size: 2rem;
`;

const RotateText = styled(Text)`
  font-family: 'Fira Sans';
`;

export default ({ heading, text, image, slug }) => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Button onClick={() => navigate(slug)} margin="small">
          <Box direction={size === 'small' ? 'column' : 'row'} height="medium" width="80vw" elevation="large">
            <Box background="dark-1" basis="1/2">
              <Img fluid={image} style={{ height: '100%' }} />
            </Box>
            <Box pad="medium" gap="medium" background="light-1" flex justify="center">
              <RotateHeading margin="none" level={2} size="xlarge">
                {heading}
              </RotateHeading>
              <RotateText>{text}</RotateText>
            </Box>
          </Box>
        </Button>
      )}
    </ResponsiveContext.Consumer>
  );
};

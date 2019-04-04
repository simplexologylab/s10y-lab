import React from 'react';
import { Box, Heading } from 'grommet';
import styled from 'styled-components';

const Text = styled(Heading)`
  font-family: 'Rajdhani';
  font-size: 1.5rem;
`;

export default ({ text, icon }) => (
  <Box direction="row" align="center" gap="small" alignSelf="start">
    {icon && icon}
    <Text margin="none" level={3}>
      {text}
    </Text>
  </Box>
);

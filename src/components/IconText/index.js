import React from 'react';

import { Box, Heading } from 'grommet';

export default ({text, icon}) => (
  <Box direction="row" align="center" gap="small" alignSelf="start">
    {icon && icon}
    <Heading margin="none" level={3}>{text}</Heading>
  </Box>
)
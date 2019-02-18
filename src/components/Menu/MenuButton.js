import React from 'react';
import { Box } from 'grommet';
import { Test } from 'grommet-icons';

export default () => (
  <Box background="accent-1" pad="small" elevate="medium" round="small">
    <Box background="light-1" pad="small" elevate="small" round="small" animation='pulse'>
      <Test />
    </Box>
  </Box>
)

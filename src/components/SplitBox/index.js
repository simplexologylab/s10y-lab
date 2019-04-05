import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

export default ({children}) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box direction={size === 'small' ? "column" : "row"}>
        {children}
      </Box>
    )} 
  </ResponsiveContext.Consumer>
)

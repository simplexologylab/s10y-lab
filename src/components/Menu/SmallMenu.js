import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { Box, Button } from 'grommet'

import navItems from './NavItems';

const SmallBox = styled(Box)`
  width: 100vw;
`;

export default () => (
  <SmallBox 
    background="light-1"
    align='center'
    animation='slideDown'
  >
    { navItems.map( nav => (
      <Button 
        plain
        onClick={() => navigate(nav.locaton)}
        label={nav.title}
        icon={nav.icon}
        margin="small"
        fill
        hoverIndicator
      />
    ))}
  </SmallBox>
);
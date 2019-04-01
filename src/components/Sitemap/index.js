import React from 'react';
import { navigate } from 'gatsby';
import { Box, ResponsiveContext, Button } from 'grommet';
import styled from 'styled-components';

import SitemapButton from './SitemapButton';
import SitemapName from './SitemapName';
import Social from '../../components/Social';

const PrivacyLink = styled(Button)`
  font-size: 10px;
`;

const ButtonLink = styled(Button)`
  box-shadow: none;
`;

export default () => (
  <Box>
    <Social text="follow us" />
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill gap={size} justify="center" direction={size === 'small' ? 'column' : 'row'}>
          <Box direction="row" justify="center" align="center" gap={size} pad={{ vertical: 'medium' }}>
            <SitemapButton label="Home" navTo="/" />
            <SitemapButton label="Projects" navTo="/projects" />
            <SitemapButton label="About" navTo="/about" />
            <SitemapButton label="Contact" navTo="/contact" />
          </Box>
          <Box align="center" pad="xsmall">
            <SitemapName />
            <PrivacyLink label="Privacy Policy" plain onClick={() => navigate('/privacy')} />
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </Box>
);

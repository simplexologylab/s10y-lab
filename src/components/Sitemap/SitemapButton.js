import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { Button } from 'grommet';

const SitemapButton = styled(Button)`
  border-top: 2px solid grey;

  &:hover {
    font-size: 1.1em;
  }
`;

export default ({label, navTo}) => (
  <SitemapButton 
    label={label}
    plain
    onClick={() => navigate(`${navTo}`)}
  />
)

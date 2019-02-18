import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { Button } from 'grommet';

const SitemapButton = styled(Button)`
  border-top: 2px solid grey;
  max-height: 14px;

  &:hover {
    border-top: 3px solid black;
    max-height: 16px;
  }
`;

export default ({label, navTo}) => (
  <SitemapButton 
    label={label}
    plain
    onClick={() => navigate(`${navTo}`)}
  />
)

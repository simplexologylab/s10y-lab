import React from 'react';
import { Anchor, Box, Heading } from 'grommet';
import styled from 'styled-components';

const StyledAnchor = styled(Anchor)`
  box-shadow: none;
`;

const StyledHeading = styled(Heading)`
  font-family: 'Fira Sans';
`;

export default ({pages}) => (
  <Box width="medium" gap="small" pad="medium">
    {pages.map(page => (
      <StyledAnchor 
        href={`#${page.node.id}`}
        label={
          <StyledHeading color="dark-2" level={3} margin="none">
            {page.node.frontmatter.title}
          </StyledHeading>}
      />
    ))}
  </Box>
);

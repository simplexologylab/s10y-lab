import React from 'react';
import { navigate } from 'gatsby';

import { Box, Heading, Button } from 'grommet';
import { Twitter, Pinterest, Slack, Youtube, Mail } from 'grommet-icons';
import styled from 'styled-components';

const ButtonLink = styled(Button)`
  box-shadow: none;
`;

export default ({text}) => {
  return (
    <Box 
      background="light-2" 
      pad="small" 
      direction="row" 
      align="center"
      elevation="medium"
      justify="center"
    >
      { text && <Heading level={3} margin="none">{text}</Heading> }
      <ButtonLink icon={<Twitter />} href="https://www.twitter.com" target="_blank" />
      <ButtonLink icon={<Pinterest />} />
      <ButtonLink icon={<Youtube />} />
      <ButtonLink icon={<Slack />} />
      <ButtonLink icon={<Mail />} onClick={()=>navigate('/contact')} />
    </Box>
  )
}

import React from 'react'

import { Box, Heading, Button } from 'grommet';
import { Twitter, Pinterest, Slack, Mail } from 'grommet-icons';

export default ({text}) => {
  return (
    <Box 
      background="light-2" 
      pad="small" 
      direction="row" 
      align="center"
      elevation="medium"
    >
      { text && <Heading level={3} margin="none">{text}</Heading> }
      <Button icon={<Twitter />} href="https://www.twitter.com" target="_blank" />
      <Button icon={<Pinterest />} />
      <Button icon={<Slack />} />
      <Button icon={<Mail />} />
    </Box>
  )
}

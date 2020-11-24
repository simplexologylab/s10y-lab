import React, { ReactElement } from 'react'

import { Box, Text } from 'grommet'

interface Props {
  icon: any
  text: string
}

export default ({ icon, text }: Props) => (
  <Box direction="row" justify="left" gap="small" pad="xsmall">
    {icon}
    <Text>{text}</Text>
  </Box>
)

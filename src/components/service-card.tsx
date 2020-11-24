import React from 'react'

import { Box, Heading, Text, ResponsiveContext } from 'grommet'

interface Props {
  title: string
  text: string
  button?: any
  cards?: any
}

const ServiceCard = ({ title, text, button, cards }: Props) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        pad="medium"
        animation="slideUp"
        round="small"
        gap="small"
        margin="xsmall"
        elevation="medium"
        width={size !== 'small' && 'medium'}
      >
        <Heading level={3} margin="xsmall">
          {title}
        </Heading>
        <Box height="40%" justify="center">
          <Text>{text}</Text>
        </Box>
        {cards && cards}
        {button && button}
      </Box>
    )}
  </ResponsiveContext.Consumer>
)

export default ServiceCard

import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import { ResponsiveContext, Box, Text } from 'grommet'

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Rokkitt';
  color: black;

  &:hover {
    border-right: 5px solid orange;
  }
`
const PreText = styled(Text)`
  font-size: 0.8em;
  line-height: none;
`
const MainText = styled(Text)`
  font-size: 2em;
`

interface Props {
  link: string
  pre: string
  text: string
}

const NavLink = ({ link, pre, text }: Props) => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <StyledLink to={link}>
          <Box align="end" pad="small" fill>
            {size !== 'small' && <PreText>{pre}</PreText>}
            <MainText>{text}</MainText>
          </Box>
        </StyledLink>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default NavLink

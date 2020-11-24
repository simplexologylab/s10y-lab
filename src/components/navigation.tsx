import React from 'react'

import styled from 'styled-components'

import { Box } from 'grommet'

import NavLink from './nav-link'
import './layout.css'

const NavBox = styled(Box)`
  border-top: 4px dashed gray;
  border-bottom: 4px dashed gray;
  padding: 6px;
  margin: 10px 0px;
`

const Navigation = () => {
  return (
    <NavBox justify="center" align="center">
      <Box direction="row" wrap gap="medium" align="center" justify="center">
        <NavLink link="/blog" pre="the" text="Blog" />
        <NavLink link="/the-lab" pre="find us in" text="The Lab" />
        <NavLink link="/about" pre="more" text="About Us" />
        <NavLink link="/services" pre="check out our" text="Services" />
        <NavLink link="/contact" pre="if you need to" text="Contact Us" />
      </Box>
    </NavBox>
  )
}

export default Navigation

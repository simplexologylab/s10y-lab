import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import { ResponsiveContext, Button, Box } from "grommet"

import NavLink from "./nav-link"

const NavBox = styled(Box)`  
  border-top: 4px dashed gray;
  border-bottom: 8px solid #FFC600;
  box-shadow: 0px 3px 6px #ffc800;
  padding: 10px;
  margin: 10px 0px;
`

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <ResponsiveContext.Consumer>
      {size => {
        return (
          <NavBox justify="center" align="center">
            <Box
              direction="row"
              gap="large"
              wrap
              align="center"
              justify="center"
            >
              <NavLink link="/blog" pre="the" text="Blog" />
              <NavLink link="/the-lab" pre="find us in" text="The Lab" />
              <NavLink link="/about" pre="more" text="About Us" />
              <NavLink link="/services" pre="check out our" text="Services" />
              {/* <NavLink link="/contact" pre="if you need to" text="Contact Us" /> */}
            </Box>
            <Link to="/contact">
              <Button
                label="Contact Us"
                margin="small"
                hoverIndicator
                primary
              />
            </Link>
          </NavBox>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Navigation

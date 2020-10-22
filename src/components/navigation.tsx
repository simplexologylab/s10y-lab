import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import { ResponsiveContext, Button, Box, Text } from "grommet"

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Rokkitt";
  color: black;
  font-size: 1.25rem;

  &:hover {
    border-right: 5px solid orange;
  }
`
const NavBox = styled(Box)`  
  border-top: 4px dashed gray;
  border-bottom: 8px solid orange;
  box-shadow: 0px 3px 6px #cf7004;
  padding: 10px;
  margin: 10px 0px;
`
const PreText = styled(Text)`
  font-size: 0.8em;
  line-height: none;
`
const MainText = styled(Text)`
  font-size: 2em;
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
              <NavLink to="/blog">
                <Box align="end">
                  <PreText>the</PreText>
                  <MainText>Blog</MainText>
                </Box>
              </NavLink>
              <NavLink to="/the-lab">
                <Box align="end">
                  <PreText>find us in</PreText>
                  <MainText>The Lab</MainText>
                </Box>
              </NavLink>
              <NavLink to="/about">
                <Box align="end">
                  <PreText>more</PreText>
                  <MainText>About Us</MainText>
                </Box>
              </NavLink>
              <NavLink to="/services">
                <Box align="end">
                  <PreText>check out</PreText>
                  <MainText>Services</MainText>
                </Box>
              </NavLink>
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

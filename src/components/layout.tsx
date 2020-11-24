import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import styled from 'styled-components'
import Navigation from './navigation'
import Img from 'gatsby-image'

import { Grommet, Box, Main, Footer, Button } from 'grommet'
import { Twitter, Instagram, Github } from 'grommet-icons'

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      'accent-1': '#228BE6',
      'accent-2': '#92E600',
      'accent-3': '#FFC600'
    },
    font: {
      family: 'Ubuntu',
      size: '18px',
      height: '20px'
    }
  }
}

const NavHeading = styled(Link)`
  text-decoration: none;
`
const SiteLink = styled(Link)`
  font-family: 'Rokkitt';
  text-decoration: none;
  color: gray;
`

interface Props {
  children: any
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "simple-logo.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Grommet theme={theme}>
      <Box align="center">
        <NavHeading to="/">
          <Box pad={{ horizontal: 'medium' }}>
            <Img fixed={data.logo.childImageSharp.fixed} />
          </Box>
        </NavHeading>
      </Box>
      <Navigation />
      <Main align="center">{children}</Main>
      <Footer background="dark-1" pad="medium" margin="0px">
        <SiteLink to="/about">About Simple Stuff</SiteLink>
        <SiteLink to="/services">Services We Provide</SiteLink>
        <SiteLink to="/contact">Contact Us</SiteLink>
        <Box direction="row" gap="small">
          <Button href="https://twitter.com/simplexology" target="_blank">
            <Twitter />
          </Button>
          <Button
            onClick={() => alert('Still getting this setup, stay tuned ...')}
          >
            <Instagram />
          </Button>
          <Button
            onClick={() => alert('Still getting this setup, stay tuned ...')}
          >
            <Github />
          </Button>
        </Box>
      </Footer>
    </Grommet>
  )
}

export default Layout

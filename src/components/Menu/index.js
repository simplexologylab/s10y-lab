import React, { Component } from 'react'

import { Box, DropButton } from 'grommet';

import MenuButton from './MenuButton'
import ResponsiveMenu from './ResponsiveMenu';
import Logo from './Logo';

class Menu extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <Box direction="row">
        <Box>
          <DropButton 
            label={<MenuButton />}
            margin="small"
            plain
            onClose={() => this.toggleMenu()}
            onOpen={() => this.toggleMenu()}
            open={this.state.menuOpen}
            dropContent={(<ResponsiveMenu />)}
          />
        </Box>
        <Box flex align="end" justify="center" pad="medium">
          <Logo />
        </Box>
      </Box>
    )
  }
}

export default Menu;
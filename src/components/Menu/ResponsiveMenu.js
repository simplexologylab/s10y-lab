import React from 'react'

import { ResponsiveContext } from 'grommet';
import SmallMenu from './SmallMenu';

export default () => (
  <ResponsiveContext.Consumer>
    { size => (
        (size === 'xsmall' || size ==='small') ?
          <SmallMenu /> : 
          <SmallMenu />
    )}
  </ResponsiveContext.Consumer>
)

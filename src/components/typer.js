import React from 'react';
import Typed from 'react-typed';

export default ({ rotate }) => (
  <Typed 
    strings={rotate}
    loop
    typeSpeed={100}
    backDelay={2000}
    fadeOut
  />
)
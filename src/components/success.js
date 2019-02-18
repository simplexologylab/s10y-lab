import React from 'react'
import { navigate } from 'gatsby';

export default () => (
  <div>
    Success!
    <button type="button" onClick={() => navigate('/')}>Home</button>
  </div>
)

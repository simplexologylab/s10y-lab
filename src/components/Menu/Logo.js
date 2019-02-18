import React from 'react'
import styled from 'styled-components';
import { Heading } from 'grommet';

import config from "../../../static/site-config";

const LogoText = styled(Heading)`
  font-family: 'Rajdhani';
`;

export default () => (
  <LogoText level="1" size="small" margin="xsmall">{config.siteTitle}</LogoText>
)

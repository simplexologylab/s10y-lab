import React from 'react';

import { Paragraph, Text } from 'grommet';
import styled from 'styled-components';

const Mission = styled(Paragraph)`
  font-family: 'Fira Sans';
  font-size: 2rem;
`;

const SpecialText = styled(Text)`
  color: #92e600;
  font-size: 2.5rem;
`;

export default () => (
  <Mission textAlign="center" size="xlarge">
    Our mission is to <SpecialText size="xlarge">understand</SpecialText> the seemingly complex world around us and to{' '}
    <SpecialText size="xlarge">inspire</SpecialText> learning by{' '}
    <SpecialText size="xlarge">making it simple</SpecialText>
  </Mission>
);

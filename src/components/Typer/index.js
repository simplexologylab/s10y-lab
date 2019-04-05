import React, { useState, useEffect } from 'react';
import { Box, Heading } from 'grommet';
import styled from 'styled-components';

const TypedHeading = styled(Heading)`
  font-family: 'VT323';
  color: #92e600;
  font-size: 3rem;
`;

export default ({ text, duration, delay }) => {
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (end === text.length) {
      setTimeout(() => setEnd(0), delay);
    } else {
      setTimeout(() => setEnd(end + 1), duration);
    }
  });

  return (
    <Box height="50px" direction="row" align="center" gap="2px">
      <Box>
        {text && (
          <TypedHeading level={2} margin="small" size="large">
            {text.substring(0, end)}
          </TypedHeading>
        )}
      </Box>
      <Box width="4px" height="45px" background="#92E600" animation={end === text.length && 'fadeOut'} />
    </Box>
  );
};

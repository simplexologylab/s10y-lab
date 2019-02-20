import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { Box, Meter} from 'grommet';

const Fixed = styled(Box)`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 10vw;
  height: 10vw;
  padding: 5px;
`;

function useScroll(onScroll = _ => _) {
  let [scroll, setScroll] = useState(window.scrollY);
  const scrollHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;

  function handleScroll() {
    setScroll(window.scrollY);
    onScroll();
  }

  function resetScroll() {
    setScroll(0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return scroll/scrollHeight  * 100;
}

export default () => {
  let scroll = useScroll();

  if(scroll > 10) {
    return (
      <Fixed animation="fadeIn">
        <Meter
            values={[{
                value: scroll,
                label: 'scroll-progress'
            }]}
            round
            thickness="large"
            type="circle"
            aria-label="meter"
        />
      </Fixed>
    )
  }
  return null; 
}

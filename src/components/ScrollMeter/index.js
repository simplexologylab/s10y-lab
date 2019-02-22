import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { Box, Meter} from 'grommet';

const Fixed = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  width: 10vw;
  max-width: 60px;
  max-height: 60px;
  height: 10vw;
  padding: 8px;
`;

function useScroll(onScroll = _ => _) {
  let [scroll, setScroll] = useState(0);
  let scrollHeight = 1;

  if (typeof document !== "undefined") {
    scrollHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
  }

  function handleScroll() {
    setScroll(window.scrollY);
    onScroll();
  }

  if (typeof window !== "undefined") {
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    })
  }

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

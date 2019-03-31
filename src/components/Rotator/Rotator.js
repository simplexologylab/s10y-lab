import React, { useState, useEffect } from 'react'
import { Box, Button } from 'grommet';
import { Previous, Next, Test } from 'grommet-icons';

export default ({ children, duration }) => {
  const [show, setShow] = useState(0);

  useEffect(() => {
    if (show < children.length) {
      setTimeout(() => setShow(show + 1), duration);
    } else {
      setShow(0)
    }
  })

  return (
    <Box>
      {children[show]}
      <Box>
        <Box direction="row" gap="medium" justify="center" pad="xsmall">
          {children.map(child => {
            const item = children.indexOf(child)
            return (
              <Button key={child.props.heading} onClick={() => setShow(item)}>
                {show === item ? <Test size='2rem' /> : <Test />}
              </Button>
            )
          })}
        </Box>
        <Box direction="row" justify="center">
          <Button onClick={() => setShow(show - 1)} disabled={show === 0}>
            <Box pad="small" background="dark-3" width="xsmall" align="center">
              <Previous />
            </Box>
          </Button>
          <Button onClick={() => setShow(show + 1)} disabled={show === children.length - 1}>
            <Box pad="small" background="dark-2" width="xsmall" align="center">
              <Next />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

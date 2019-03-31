import React, { useState } from 'react'

import { Box, Button, Layer, Stack } from 'grommet';
import { Close, UserAdmin } from 'grommet-icons';

export default ({children}) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button 
        icon={<UserAdmin size="30px" />}
        onClick={()=>setOpen(!open)} 
      />
      { open && (
        <Layer
          modal
          onClickOutside={()=>setOpen(false)}
          onEsc={()=>setOpen(false)}
        >
          <Stack anchor="top-right">
            {children}
            <Button 
              icon={<Close />} 
              onClick={()=>setOpen(false)} 
            />
          </Stack>
        </Layer>
      )}
    </Box>
  )
}

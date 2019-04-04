import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';

import { Box, Button, DropButton } from 'grommet';

import NotAuthed from './NotAuthed';

export default ({ children, showIcon }) => {
  const [isAuthed, setIsAuthed] = useState(false);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => setIsAuthed(true))
      .catch(() => setIsAuthed(false));
  });

  if (isAuthed) {
    return (
      <div>
        {children && children}
        {showIcon && (
          <DropButton
            icon={showIcon}
            dropContent={
              <Box pad={{ horizontal: 'large' }}>
                <Button
                  icon={showIcon}
                  label="signout"
                  plain
                  reverse
                  margin="small"
                  onClick={() => Auth.signOut().then(setIsAuthed(''))}
                />
              </Box>
            }
          />
        )}
      </div>
    );
  }

  return (
    <NotAuthed>
      <Authenticator
        onStateChange={authState => {
          authState === 'signedIn' ? setIsAuthed(true) : setIsAuthed(false);
        }}
      />
    </NotAuthed>
  );
};

import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { Button } from 'grommet';

import { Auth } from 'aws-amplify';

export default () => {
  const [authed, setAuthed] = useState(false);

  Auth.currentAuthenticatedUser({
    bypassCache: false,
  })
    .then(() => setAuthed(true))
    .catch(error => console.log('authed-errored', error));

  const handleLogout = () => {
    Auth.signOut().then(() => setAuthed(false));
  };

  if (authed) {
    return <Button label="logout" onClick={() => handleLogout()} />;
  }

  return <Button label="login" onClick={() => navigate('/add-auth/')} />;
};

import React from 'react';
import { Link } from 'gatsby';
import { withAuthenticator } from 'aws-amplify-react';

const Auth = props => (
  <div>
    <h1>Should only see this when logged in</h1>
    <Link to="/">Home</Link>
    <pre>{JSON.stringify(props, 0, 2)}</pre>
  </div>
);

export default withAuthenticator(Auth, true);

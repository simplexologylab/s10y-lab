import React from 'react';
import { Link } from 'gatsby';
import Authed from '../components/Authed';

class AddAuth extends React.Component {

  render() {
    return (
      <div>
        <h1>Should Always See This</h1>
        <Link to="/">Home</Link>
        <Authed>
          <p>Protected Data</p>
        </Authed>
      </div>
    )
  }
}

// export default withAuthenticator(Auth, true);
export default AddAuth
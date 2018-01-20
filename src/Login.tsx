import * as React from 'react';
import Auth from './Auth/Auth';

class Login extends React.Component {
  render() {
    const auth = new Auth();
    auth.login();
    return (
      <div>
        <script type="text/javascript" src="node_modules/auth0-js/build/auth0.js" />
        <h1>Login.tsx</h1>
      </div>
    );
  }
}
export default Login;

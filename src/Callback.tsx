import * as React from 'react';
import Auth from './Auth/Auth';

class Callback extends React.Component {
  render() {
    const auth = new Auth();
    auth.handleAuthentication();
    return (
      <div>
        <h1>Callback.tsx</h1>
      </div>
    );
  }
}
export default Callback;

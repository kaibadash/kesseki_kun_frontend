import * as React from 'react';
import Auth from './Auth/Auth';
import { Redirect } from 'react-router-dom';

class Callback extends React.Component {
  render() {
    const auth = new Auth();
    auth.handleAuthentication();
    
    return <Redirect to={{ pathname: '/event_form' }}/>;
  }
}
export default Callback;

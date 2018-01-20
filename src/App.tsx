import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EventForm from './EventForm';
import Login from './Login';
import Callback from './Callback';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href="/login">login</a></li>
        </ul>
        <BrowserRouter>
          <div>
            <Route path="/login" component={Login} />
            <Route path="/callback" component={Callback} />
            <Route path="/event_form" component={EventForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

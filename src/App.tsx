import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EventForm from './EventForm';
import Login from './Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/login" component={Login} />
            <Route path="/event_form" component={EventForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

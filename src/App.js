import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';

//screens 
import Main from './screens/Main/Main';
import Profile from './screens/Profile/Profile';

class App extends Component {
  render(){
    
    return(
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route 
              path="/profile*"
              component={Profile} 
            />

            <Route 
              path="/"
              component={Main}
            />

            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

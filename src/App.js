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
import Cart from './components/Cart/Cart';
import CartScreen from './screens/Cart/CartScreen';

class App extends Component {
  render(){
    
    return(
      <Router>
        <div>
          <Navbar />

          <Cart />

          <Switch>
            <Route 
              path="/profile*"
              component={Profile} 
            />

            <Route
              path="/cart*"
              component={CartScreen} 
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

import React, { Component } from 'react'; 

import Login from './Login/Login';
import Register from './Register/Register';

class Auth extends Component {
  constructor(props){
    super(props);

    this.state = {
      register: false
    }
  }

  render(){

    return (
      <>
      {this.state.register
        ?
          <Register />
        :
          <Login />
      }
      </>
    )
  }
};

export default Auth;	
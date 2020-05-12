import React, { Component } from 'react'; 
import { withRouter } from "react-router-dom";

import Login from './Login/Login';
import Register from './Register/Register';

class Auth extends Component {
  render(){
    const { pathname } = this.props.location;
    let content = null;

    switch(pathname){
      case '/profile-register':
          content = <Register />
        break;
      case '/profile':
          content = <Login />
        break;
      default: 
          content = <Login />
        break;
    }


    return (
      <>
        {content}
      </>
    )
  }
};

export default withRouter(Auth);	
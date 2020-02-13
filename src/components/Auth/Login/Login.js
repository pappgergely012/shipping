import React, { Component } from 'react'; 
import Input from '../../Input/Input';


class Login extends Component {
  render(){
    return (
      <div className="login-outer">
        <div className="login-inner">
          <div className="title-center-xxl">
            Bejelentkezés
          </div>

          <Input
            placeholder='E-mail'
            ref={ref => this.email = ref}
          />

          <Input
            placeholder='Jelszó'
            ref={ref => this.password = ref}
          />

          <button 
            className="main-button"
            onClick={() => this.tryLogin()}
          >
            Bejelentkezés
          </button>
        </div>
      </div>
    )
  }

  tryLogin = () => {
    const email    = this.email.getValue(),
          password = this.password.getValue();

    console.log(email, password);
  }
};

export default Login;	
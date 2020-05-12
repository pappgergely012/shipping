import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

//reducers & actions
import { onSetLogin } from '../../../store/actions/ProfileActions';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  render(){
    return (
      <div className="login-outer">
        <div className="login-inner">
          <div className="title-center-xxl my-15">
            Bejelentkezés
          </div>

          <Input
            placeholder='E-mail'
            type="email"
            onChangeText={(val) => this.onChangeText('email', val)}
            ref={ref => this.email = ref}
          />

          <Input
            placeholder='Jelszó'
            type="password"
            onChangeText={(val) => this.onChangeText('password', val)}
            ref={ref => this.password = ref}
          />

          <div className="button-row mt-12">
            <Button 
              title="Regisztráció"
              classes="main-button--md mx-5 passive"
              onClick={() => this.props.history.push('/profile-register')}
            />

            <Button 
              title="Bejelentkezés"
              classes="main-button--md mx-5"
              onClick={() => this.tryLogin()}
            />
          </div>
        </div>
      </div>
    )
  }

  onChangeText = (type, val) => {
    this.setState(prevState => ({
      ...prevState,
      [type]: val
    }))
  }

  tryLogin = () => {
    const { email, password } = this.state;

    if(email && password){
      this.props.onSetLogin({email, password})
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  onSetLogin: (profileData) => dispatch(onSetLogin(profileData))
})

export default withRouter(connect(null, mapDispatchToProps)(Login));	
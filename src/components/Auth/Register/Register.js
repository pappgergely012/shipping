import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import MessageModal from '../../UI/MessageModal/MessageModal';
import { CompareValues } from '../../../utility/InputValidation/InputValidation';
import { onSetLogin } from '../../../store/actions/ProfileActions';

class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      alertModal: false,
      email: '',
      password1: '',
      password2: ''
    }
  }
  
  render(){
    return (
      <div className="register-outer">
        <div className="register-inner">
          <div className="title-center-xxl my-15">
            Regisztráció
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
            onChangeText={(val) => this.onChangeText('password1', val)}
            ref={ref => this.password1 = ref}
          />

          <Input
            placeholder='Jelszó mégegyszer'
            type="password"
            onChangeText={(val) => this.onChangeText('password2', val)}
            ref={ref => this.password2 = ref}
          />

          <div className="button-row mt-12">
            <Button 
              title="Vissza"
              classes="main-button--md mx-5 passive"
              onClick={() => this.props.history.push('/profile')}
            />

            <Button 
              title="Regisztráció"
              classes="main-button--md mx-5"
              onClick={() => this.register()}
            />
          </div>

          <MessageModal
            show={this.state.alertModal}
            closeModal={this.toggleModal}
            title="Hiba történt"
            message="A két jelszó nem egyezik!"
          />
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

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
        alertModal: !prevState.alertModal
    }))
  }

  register = () => {
   const { email, password1, password2 } = this.state;
   const hasError = CompareValues(password1, password2);

    if(hasError){
      this.toggleModal();

      return;
    }
    
    if(password1 && email){
      this.props.onSetLogin({email});
      this.props.history.push('/profile')
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  onSetLogin: (profileData) => dispatch(onSetLogin(profileData))
})

export default withRouter(connect(null, mapDispatchToProps)(Register));	
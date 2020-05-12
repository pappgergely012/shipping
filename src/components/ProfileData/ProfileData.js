import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import Input from '../UI/Input/Input';
import { onChangeProfile } from '../../store/actions/ProfileActions';
import Button from '../UI/Button/Button';

class ProfileData extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: this.props.profile.email,
      name: this.props.profile.name,
      phone: this.props.profile.phone,
      address: {
        zip: this.props.profile.address.zip,
        city: this.props.profile.address.city,
        street: this.props.profile.address.street,
        number: this.props.profile.address.number
      },
      cards: this.props.profile.card
    }
  }

  render(){
    const { email, name, phone, address, card } = this.state;

    return (
      <div className="profile-container">
        <div className="title-left-xxl my-5 mt-20 ml-5">
          Személyes adatok
        </div>
        
        <Input
          placeholder="E-mail"
          initValue={email}
          type="email"
          onChangeText={(val) => this.onChangeText('email', val)}
          ref={ref => this.email = ref}
        />

        <Input
          placeholder='Név'
          initValue={name}
          type="text"
          onChangeText={(val) => this.onChangeText('name', val)}
          ref={ref => this.name = ref}
        />

        <Input
          placeholder='Telefonszám'
          initValue={phone}
          type="tel"
          onChangeText={(val) => this.onChangeText('phone', val)}
          ref={ref => this.phone = ref}
        />

        <div className="title-left-xxl my-5 mt-20 ml-5">
          Cím adatok
        </div>

        <Input
          placeholder='Irányítószám'
          initValue={address.zip}
          type="number"
          maxLength={4}
          onChangeText={(val) => this.onChangeText('zip', val, true)}
          ref={ref => this.zip = ref}
        />

        <Input
          placeholder='Város'
          initValue={address.city}
          type="text"
          onChangeText={(val) => this.onChangeText('city', val, true)}
          ref={ref => this.city = ref}
        />

        <Input
          placeholder='Utca'
          initValue={address.street}
          type="text"
          onChangeText={(val) => this.onChangeText('street', val, true)}
          ref={ref => this.street = ref}
        />

        <Input
          placeholder='Házszám'
          initValue={address.number}
          type="number"
          onChangeText={(val) => this.onChangeText('number', val, true)}
          ref={ref => this.number = ref}
        />

        <div className="title-left-xxl my-5 mt-20 ml-5">
          Cím adatok
        </div>

        <Input
          placeholder='Mentett Kártya'
          initValue={card}
          type="tel"
          onChangeText={(val) => this.onChangeText('card', val)}
          ref={ref => this.number = ref}
        />

        <div className="button-row mt-12">
          <Button 
            title="Mentés"
            classes="main-button--md passive"
            onClick={() => this.saveChanges()}
          />
        </div>
      </div>
    )
  }

  onChangeText = (type, val, isAddress = false) => {
    if(isAddress){
      this.setState(prevState => ({
        ...prevState,
          address: {
            ...prevState.address,
            [type]: val
          }
      }))

      return;
    }

    this.setState(prevState => ({
      ...prevState,
      [type]: val
    }))
  }

  saveChanges = () => {
    const { email, name, phone, address } = this.state;

    this.props.onChangeProfile({email, name, phone, address})
  }
};

const mapStateToProps = state => ({
  profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
  onChangeProfile: profileData => dispatch(onChangeProfile(profileData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileData);	
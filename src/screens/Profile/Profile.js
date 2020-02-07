import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import ProfileData from '../../components/ProfileData/ProfileData';
import Register from '../../components/Register/Register';

class Profile extends Component {
  render(){
    console.log(this.props)
    return (
      <div>
        <div className="profile-content">
          {this.props.profile.loggedIn
            ?
              <ProfileData />
            :
              <Register />
          }
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, null)(Profile);	
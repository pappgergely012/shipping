import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 

import ProfileData from '../../components/ProfileData/ProfileData';
import Auth from '../../components/Auth/Auth';

class Profile extends Component {
  render(){
    return (
      <div>
        <div className="profile-content">
          {this.props.profile.loggedIn
            ?
              <ProfileData />
            :
              <Auth />
          }
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  profile: state.profile
})

export default withRouter(connect(mapStateToProps, null)(Profile));	
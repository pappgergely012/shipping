import React from 'react'; 

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component{
  render(){
    const { profile } = this.props;

    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="nav-top">
            <Link to="/">
              <div className="navbar-logo">Shipper</div>
            </Link>

            <Link 
              to="/profile"
              className="login-button"
            >
              <FontAwesomeIcon  
                icon={profile.loggedIn ? faUserAlt : faSignInAlt}
              />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default withRouter(connect(mapStateToProps, null)(Navbar));	
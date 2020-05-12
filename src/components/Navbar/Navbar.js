import React from 'react'; 

import Categories from '../Categories/Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';


class Navbar extends React.Component{
  render(){
    const { pathname } = this.props.location;

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
                icon={faSignInAlt}
              />
            </Link>
          </div>

          {/* {pathname.includes('profile') ? null :  <Categories />} */}
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar);	
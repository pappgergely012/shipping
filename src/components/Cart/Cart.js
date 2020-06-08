import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Cart = ({history}) => {
  const { cart } = useSelector(state => state)

  if(cart.items.length === 0){
    return null
  }

  const onPress = () => {
    history.push('/cart');
  }
  
  return (
    <div className="cart-icon-outer" onClick={() => onPress()}>
      <div className="cart-icon-qunatity">{cart.items.length}</div>

      <Icon
        icon={faCartPlus}
        color="#339cdd"
        className="cart-icon"
      />
    </div>
  )
}

export default withRouter(Cart);
import React from 'react';
import './CartScreen.scss';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { dataFormat } from '../../utility/common';

const CartScreen = ({history}) => {
  const { cart } = useSelector(state => state);

  if (cart.items.length < 1) {
    history.push('/')
  }

  const getParams = (cartItem) => {
    if (cartItem.params.length > 0) {
      return cartItem.params.map((param, index) => {
        return (
          <li key={`${param}-${index}`} className="list-item">
            {param}
          </li>
        )
      })
    }
  }

  const getPrice = (cartItem) => {
    if (cartItem.price_sales) {
      return (
        <>
        <span>{dataFormat('priceFormat', cartItem.price_sales)}</span>
        <div>{dataFormat('priceFormat',cartItem.price)}</div>
        </>
      )
    } else {
      return dataFormat('priceFormat', cartItem.price)
    }
  }

  const renderItems = () => {
    return cart.items.map((cartItem, index) => {
      return (
        <div  
          className={cart.items.length - 1 !== index ? "cart-item bordered" : "cart-item"}
          key={index}
        >
          <img src={cartItem.image_url} className="cart-item__image" />

          <div className="cart-item__data-container">
            <span className="cart-item__name">{cartItem.name}</span>

            <div className="cart-item__description">
              {cartItem.description}
            </div>

            <ul className="cart-item__list">
              {getParams(cartItem)}
            </ul>

            <div className="cart-item__price">
              {getPrice(cartItem)}
            </div>
          </div>
        </div>
      )
    })
  }

  return ( 
    <div className="cart-screen">
      <div className="title">Kosár</div>

      {renderItems()}
    </div>
  )
}

export default withRouter(CartScreen);
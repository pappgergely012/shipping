export const setCartItem = (product) => {

  return (dispatch) => {
    dispatch(toCart(product));
  }
}

const toCart = (product) => {
  return {
    type: 'SET_CART_ITEM',
    product: product
  }
}
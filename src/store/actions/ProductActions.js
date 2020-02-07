export const onSetProduct = (product) => {
  return (dispatch) => {
    dispatch(setProduct(product));
  }
}

const setProduct = (product) => {
  return {
    type: 'SET_PRODUCT_TO_MODAL',
    name: product.name,
    description: product.description,
    price: product.price
  }
}
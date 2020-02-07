const initialState = {
  singleProductData: {}
};

const reducer = (state = initialState, actions) => {
  switch (actions.type){
    case 'SET_PRODUCT_TO_MODAL':
      return {
        ...state,
        singleProductData: {
          name: actions.name,
          description: actions.description,
          price: actions.price
        }
      }
      default: {
        return state
      }
  }
}

export default reducer;
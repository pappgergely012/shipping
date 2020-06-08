const initialState = {
  items: []
};

const CartReducer = (state = initialState, actions) => {
  switch (actions.type){
    case 'SET_CART_ITEM':
      return {
        ...state,
        items: [...state.items, actions.product]
      }
      default: {
        return state
      }
  }
}

export default CartReducer;
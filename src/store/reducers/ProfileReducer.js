const initialState = {
  loggedIn: false
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SET_PROFILE':
        return {
          ...state,
          loggedIn: true,
          name: actions.name,
          email: actions.email,
          phone: actions.phone
        }
    default: 
      return state;
  }
}

export default reducer;
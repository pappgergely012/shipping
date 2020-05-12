const initialState = {
  loggedIn: false,
  email: 'papp.gergely012@gmail.com',
  name: 'Papp Gergely',
  phone: '06/70-257-4500',
  address: {
    zip: '3535',
    city: 'Miskolc',
    street: 'Kuruc',
    number: '69'
  },
  card: '6969-xxxx-xxxx-xxxx'
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SET_LOGIN':
        return {
          ...state,
          loggedIn: true,
          email: actions.email
        }
    case 'CHANGE_PROFILE':
      return {
        ...state,
        loggedIn: state.loggedIn,
        name: actions.name,
        email: actions.email,
        phone: actions.phone,
        address: actions.address
      }
    default: 
      return state;
  }
}

export default reducer;
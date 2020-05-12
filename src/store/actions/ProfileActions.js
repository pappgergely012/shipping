export const onSetLogin = (profileData) => {
  return (dispatch) => {
    dispatch(setLogin(profileData))
  }
}

export const onChangeProfile = (profileData) => {
  return dispatch => {
    dispatch(changeProfile(profileData))
  }
}

const setLogin = (profile) => {
  return {
    type: 'SET_LOGIN',
    email: profile.email
  } 
}

const changeProfile = profile => {
  return {
    type: 'CHANGE_PROFILE',
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    address: profile.address
  }
}
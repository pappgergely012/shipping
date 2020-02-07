export const onSetProfile = (profileData) => {
  return (dispatch) => {
    dispatch(setProfile(profileData))
  }
}

const setProfile = (profile) => {
  return {
    type: 'SET_PROFILE',
    name: profile.name,
    email: profile.email,
    phone: profile.phone
  } 
}
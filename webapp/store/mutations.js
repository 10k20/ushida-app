export const CHANGE_AUTH_STATUS = (state, {authStatus, accessToken, profileData}) => {
  state.auth.authorized = authStatus
  state.auth.accessToken = accessToken,
  state.auth.profileData = profileData
}
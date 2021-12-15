export const CHANGE_AUTH_STATUS = (state, {authStatus, accessToken, profileData}) => {
  state.auth.authStatus = authStatus
  state.auth.accessToken = accessToken,
  state.auth.profileData = profileData
}
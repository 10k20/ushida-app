export const changeAuthStatus = ({ commit }, { authStatus, accessToken, profileData }) => {
  commit('CHANGE_AUTH_STATUS', { authStatus, accessToken, profileData })
}
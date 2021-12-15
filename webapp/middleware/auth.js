export default function ({ redirect, app, store }) {
  if ((!app.$storage.getUniversal('accessToken') && !app.$storage.getUniversal('profileData'))) {
    redirect('/auth')
  }
  else {
    store.dispatch('changeAuthStatus', {
      authStatus: true,
      accessToken: app.$storage.getUniversal('accessToken'),
      profileData: app.$storage.getUniversal('profileData')
    })
  }
}
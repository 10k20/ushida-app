export default function ({$axios, store, redirect}) {
  $axios.onRequest(() => {
    let accessToken = store.state.auth.accessToken;

    $axios.interceptors.response.use(null, (error) => {
      if (error.response.status === 401) {
        redirect('/auth');
      }
    });

    if (accessToken) {
      $axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    }
  })
}

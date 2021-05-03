import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Assets/Common.scss';
import App from './App';
import { createStore } from 'redux';
import { rootReducer } from './Store/Reducers'
import { Provider, connect } from 'react-redux';
import { setAuthLogin, setAuthStatus } from './Store/Actions'


const store = createStore(rootReducer);


const mapStateToProps = (state) => {
  return {
    login: state.login,
    authorized: state.authorized
  }
}

const mapDispatchToProps = {
  setAuthLogin,
  setAuthStatus
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <WrappedApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

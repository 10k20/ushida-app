import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Header from './Components/Header/Header';
import Ball from './Components/Ball/Ball'


const App = (props) => {
  // console.log(props)
  return (
      <div className="App"> 
      <Ball/>
        <Header 
          login={props.login} 
          authorized={props.authorized} 
        />
        <Switch>
        </Switch>
      </div>
  );
}

export default App
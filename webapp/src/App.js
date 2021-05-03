import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Header from './Components/Header/Header';
// import Ball from './Components/Ball/Ball';
import Products from './Components/Products/Products'


const App = (props) => {
  return (
      <div className="App"> 
      {/* <Ball/> */}
        <Header 
          login={props.login} 
          authorized={props.authorized} 
        />
        <Switch>
          <Route exact path='/' component={() => 
            <Header/>}  
          />
          <Route exact path='/products' component={() => 
            <Products/>}  
          />
        </Switch>
      </div>
  );
}

export default App
import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './Auth/Screen/login.components';
import Signup from './Auth/Screen/signup.component';
import HomeScreen from './home/Screen/home.components';
import { AUTH_TOKEN, EMAIL} from './common/constants';
// import Navbarr from './common/navbar.components';
import { AppContext, useAppContext } from './common/contextLib';
import Forgot from './Auth/Screen/forgot.components';
import ResetPassword from './Auth/Screen/resetP.component';
import NavBar from './common/NavBar/navBar';
// import Secret from './home/Secrets/secrets';



function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  const auth_token = localStorage.getItem(AUTH_TOKEN);

  const logout = ()=>{
    localStorage.removeItem(AUTH_TOKEN);

  } 
  

  function handleLogout() {
    userHasAuthenticated(false);
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(EMAIL);
  }

  

  return (
    
  <AppContext.Provider  value={{isAuthenticated, userHasAuthenticated}}>
     <Router>
       <div className="App">
         
        <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout}/> 
        {/* <Secret /> */}

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            {/* <Route exact path='/menu' component = {Sidebar}/> */}
            <Route path='/home' component={HomeScreen} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/forgot" component={Forgot}/>
            <Route path="/reset" component={ResetPassword}/>

          </Switch>
        </div>
      </div>

      </div>
    </Router>
  </AppContext.Provider>

    );
}

export default App;
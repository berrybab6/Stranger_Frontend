import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './Auth/Screen/login.components';
import Signup from './Auth/Screen/signup.component';
import HomeScreen from './home/Screen/home.components';
import { AUTH_TOKEN, EMAIL} from './common/constants';
import Navbarr from './common/navbar.components';
import { AppContext, useAppContext } from './common/contextLib';


function Routes(){
  return (
       
    
    <Router>
    <div className="App">
       {/* <Navbarr /> */}
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/home' component={HomeScreen} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  const auth_token = localStorage.getItem(AUTH_TOKEN);

  // const logout = ()=>{
  //   localStorage.removeItem(AUTH_TOKEN);

  // } 

  function handleLogout() {
    userHasAuthenticated(false);
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(EMAIL);
  }
  return (
    
  <AppContext.Provider  value={{isAuthenticated, userHasAuthenticated}}>
     <Router>
       <div className="App">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>Hey, Stranger</Link>
          <div className="collapse navbar-collapse lela" id="navbarTogglerDemo02">
         
        {(!isAuthenticated)?(<ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/home"}>Home</Link>
                  </li>
                  <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Signup</Link>
              </li>
            </ul>):(<ul className="navbar-nav ml-auto">
               
              <li className="nav-item" onClick={handleLogout}>
                <Link className="nav-link" to={"/"}>Logout</Link>
              </li>
            </ul>)

              } 
           

          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/home' component={HomeScreen} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
          </Switch>
        </div>
      </div>

      </div>
    </Router>
  </AppContext.Provider>

  
  // <Router>
  //   <div className="App">
   //     <Navbarr />
  //     <div className="auth-wrapper">
  //       <div className="auth-inner">
  //         <Switch>
  //           <Route exact path='/' component={HomeScreen} />
  //           <Route path='/home' component={HomeScreen} />
  //           <Route path="/sign-in" component={Login} />
  //           <Route path="/sign-up" component={Signup} />
  //         </Switch>
  //       </div>
  //     </div>
  //   </div></Router>
  );
}

export default App;
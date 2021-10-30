import React from "react";
import { Link } from "react-router-dom";

const Navbarr =()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>Hey, Stranger</Link>
          <div className="collapse navbar-collapse lela" id="navbarTogglerDemo02">
         
          <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/home"}>Home</Link>
                  </li>
                  <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Signup</Link>
              </li>
            </ul>

                        {/* {
                (!auth_token)? <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/home"}>Home</Link>
                  </li>
                  <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Signup</Link>
              </li>
            </ul>
                  :
                  <ul className="navbar-nav ml-auto">
               
              <li className="nav-item" onClick={logout}>
                <Link className="nav-link" to={"/"}>Logout</Link>
              </li>
            </ul>
              } */}
           
          </div>
        </div>
      </nav>
    );
} 


export default Navbarr;
import gql from "graphql-tag";
import React, {Component, useState} from "react";
// import { useState } from "react";
// import '../../index.css';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { AUTH_TOKEN, EMAIL } from "../../common/constants";
import { useAppContext } from "../../common/contextLib";

const Login = () => {
    const { userHasAuthenticated} = useAppContext();
    
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
    
    
    const loginMutation = gql`
    mutation LoginMutation($username:String!, $password:String!){
        tokenAuth(username: $username, password: $password) {
            success,
            errors,
            token,
            user {
              email,
              username,
            }
          }
    }`;


    const [ login ] = useMutation(loginMutation, {
        variables:{
            username:username,
            password:password
        },
        onCompleted:({ tokenAuth })=>{
            if(tokenAuth.success){
            console.log("Email: "+tokenAuth.user.email);

            localStorage.setItem(AUTH_TOKEN, tokenAuth.token);
            localStorage.setItem(EMAIL, tokenAuth.user.email);
            userHasAuthenticated(true);

            history.push('/');
            }
            else{
                if(tokenAuth.errors.nonFieldErrors){
                    var errors = "";
                    for(let i=0;i<tokenAuth.errors.nonFieldErrors.length;i++){
                        errors += tokenAuth.errors.nonFieldErrors[i].message + "\n"
                    }
                    setError(errors);
                }
                
            }
        },
           onError:()=>{
               setError("Connection Failure!!!");
           }
        
    });
        return (
            <form  onSubmit={e => {
                e.preventDefault();
                if(username == ""||password ==""){
                    setError("Fields can't be empty!!!");
                }else{
                login();
                }
                
              }}
              >
                <h3 class="login_c">Hey, Stranger</h3>

              {
                  (error)?<div className="form-group errorText">
                  <label value={error} >{error}</label>
                 </div>:<div></div>
              }
                <div className="form-group">
                    <label className="login_c">Email address</label>
                    <input type="name" value={username} onChange={(e)=>{setUsername(e.target.value)}} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="login_c">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label login_c" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit"  class="col-md-8 btn btn-primary lelaa">Login</button>
                </div>
                {/* <button type="submit" className="col-md-6 text-center btn btn-primary btn-block submit">Login</button> */}
                <p className="forgot-password text-right">
                    Forgot <a href="/forgot">password?</a>
                </p>
            </form>
        );
    };


export default Login;
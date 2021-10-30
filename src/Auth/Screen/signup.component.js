import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React, {useState,  Component } from "react";
import { useHistory } from "react-router";
import { AUTH_TOKEN } from "../../common/constants";

const Signup = ()=>{
    const history = useHistory();

   const [ password, setPassword ] = useState("");
   const [ email, setEmail] = useState("");
   const [ username, setUsername] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error, setError] = useState(null); 
   const registerMutation = gql`
   mutation RegisterMutation($email:String!, $username:String!, $password1:String!, $password2:String!){
    register(
        email:$email,
        username:$username,
        password1:$password1,
        password2:$password2
      ){
        success,
        errors,
        token,
        refreshToken
      }
   }
   `;

   const [signup] = useMutation(registerMutation,{
       variables:{
           email:email,
           username:username,
           password1:password,
           password2:confirmPassword
       },
       onCompleted:({register})=>{
        console.log("success: "+register.success);
        if(register.errors!=null){
            if(register.errors.email){
                console.log("error: "+register.errors.email[0].message);
                setError(register.errors.email[0].message)
                setPassword("");
                setConfirmPassword("");
            }
            else if(register.errors.username){
                console.log("error: "+register.errors.username[0].message);
                setError(register.errors.username[0].message)
                setPassword("");
                setConfirmPassword("");
            }
            else if(register.errors.password2){
                console.log("error: "+register.errors.password2[0].message);
                setError(register.errors.password2[0].message)
                setPassword("");
                setConfirmPassword("");
            }
        }
        else{
            console.log("error: "+register.errors);
        localStorage.setItem(AUTH_TOKEN, register.token);
        // localStorage.setItem(EMAIL, tokenAuth.user.email);

        history.push('/sign-in');
        }
       }
   })
        return (
            <form onSubmit={e => {
                e.preventDefault();
                signup();
                
              }}>
                <h3>Sign Up</h3>
            {
                (error)? <div className="form-group" class="errorText">
                <label value={error} >{error}</label>
               
            </div>:<div></div>
            }
               

                <div className="form-group">
                    <label>email</label>
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>username</label>
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} className="form-control" placeholder="username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                    <label>confirmPassword</label>
                    <input type="password" value={confirmPassword} onChange ={(e)=>{setConfirmPassword(e.target.value)}} className="form-control" placeholder="Confirm password" />
                </div>

                <button type="submit"  className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    
}
export default Signup;
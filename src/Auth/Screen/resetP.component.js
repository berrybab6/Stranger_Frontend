import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import gql from "graphql-tag";


const ResetPassword =()=>{
    const [token, setToken] = useState("");
    const [password1, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error , setError] = useState(null);
    const resetPasswordMutation = gql`
    mutation ForgotMutation($token:String!, $password1:String!, $password2:String!){
        passwordReset(token:$token, newPassword1:$password1, newPassword2:$password2){
            success,
            errors
        }
    }`;

    const [resetPassword] = useMutation(
       resetPasswordMutation, {
           variables:{
               token:token,
               password1:password1,
               password2:password2
           },

           
           onCompleted:({passwordReset})=>{
               if(passwordReset.success){
                console.log(passwordReset.success);
                setError(passwordReset.success)
            }else{
            if(passwordReset.errors.nonFieldErrors){
                setError(passwordReset.errors.nonFieldErrors[0].message);
            }else if(passwordReset.errors.newPassword2){
                var errors = ""
                for(let i=0; i< passwordReset.errors.newPassword2.length;i++){
                    errors =errors + passwordReset.errors.newPassword2[i].message + '\n';

                   
                }
                setError(errors);
            }
            // setError(passwordReset.newPassword2[0].message);
           }
        }
       }
    );
    return (
        <form  onSubmit={e => {
            e.preventDefault();
            // if(password2 !== password2){
            //     setError("Password Must Match!");
            // }else if(token==""|| password1 ==""|| password2==""){
            //     setError("Fields can't be empty");
            // }else{
            // resetPassword();
            // }
            resetPassword();
          }}
          >

            <h3 class="login_c">Reset Password</h3>
            {
                (error)? <div className="form-group" class="errorText">
                <label value={error} >{error}</label>
               
            </div>:<div></div>
            }
              
            <div className="form-group">
                <label className="login_c">Reset Token</label>
                <input type="text"  className="login_f" value={token} onChange={(e)=>{setToken(e.target.value)}} className="form-control" placeholder="Your Token" />
            </div>
            <div className="form-group">
                <label className="login_c">New Password</label>
                <input type="password"  className="login_f" value={password1} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="New Password" />
            </div>
            <div className="form-group">
                <label className="login_c">Confirm Password</label>
                <input type="password"  className="login_f" value={password2} onChange={(e)=>{setPassword2(e.target.value)}} className="form-control" placeholder="Confirm Password" />
            </div>


            <div class="d-flex justify-content-center">
                <button type="submit"  class="col-md-8 btn btn-primary lelaa">Reset Password</button>
            </div>
            {/* <button type="submit" className="col-md-6 text-center btn btn-primary btn-block submit">Login</button> */}
            
        </form>
    );
}

export default ResetPassword;
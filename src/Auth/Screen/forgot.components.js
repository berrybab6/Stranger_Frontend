import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import gql from "graphql-tag";
import { useHistory } from "react-router";


const Forgot =()=>{
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success , setSuccess] = useState(false);
    const forgotMutation = gql`
    mutation ForgotMutation($email:String!){
        sendPasswordResetEmail(email:$email){
            success,
            errors
        }
    }`;

    const [forgot] = useMutation(
       forgotMutation, {
           variables:{
               email:email
           },
           onCompleted:({sendPasswordResetEmail})=>{
               if(!sendPasswordResetEmail){
                    setError("Connection Failure");
               }
               else if(sendPasswordResetEmail.errors == null){
                console.log(sendPasswordResetEmail.success);
                setSuccess(true)
                // history.push('/reset');
            }else{
                if(sendPasswordResetEmail.errors.email){
                    var errors = sendPasswordResetEmail.errors.email[0].message;
                    setError(errors); 
                }else if(sendPasswordResetEmail.errors.nonFieldErrors){
                    var errors = sendPasswordResetEmail.errors.nonFieldErrors[0].message;

                }
            }
           },
           onError:()=>{
               setError("Connection Failure!!!");
           }

       } 
    );
    return (
  
       
  
        <form  onSubmit={e => {
            e.preventDefault();
            if(email){
                forgot();

            }else{
                setError("Fields can't be empty!!!");
            }
            
          }}
          >

           {
               (success)? <div className="form-group">
               <label className="login_c">Email Sent Successfully </label>
               <p>Check your email. We have sent you verification code to {email}.Set your new password from there.</p>
               <p>you can close this window.</p>
               </div>:<div>
                    <h3 class="login_c">Forgot Password</h3>
            
            {  (error)? <div className="form-group" class="errorText">
              <label value={error} >{error}</label>
             
          </div>:<div></div>
          }
          <div className="form-group">
              <label className="login_c">Enter Your Email address</label>
              <input type="email"  className="login_f" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Enter email" />
          </div>

          <div class="d-flex justify-content-center">
              <button type="submit"  class="col-md-8 btn btn-primary lelaa">Send Reset Link</button>
          </div>
          {/* <button type="submit" className="col-md-6 text-center btn btn-primary btn-block submit">Login</button> */}
          :<div></div>
               </div>
           }

           
        </form>
    );
}

export default Forgot;
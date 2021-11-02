import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import gql from "graphql-tag";
import { useHistory } from "react-router";


const Forgot =()=>{
    const history = useHistory();
    const [email, setEmail] = useState("");
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
               if(sendPasswordResetEmail.errors == null){
                console.log(sendPasswordResetEmail.success);
                history.push('/reset');
            }
           }
       } 
    );
    return (
        <form  onSubmit={e => {
            e.preventDefault();
            forgot();
            
          }}
          >
            <h3 class="login_c">Forgot Password</h3>

            <div className="form-group">
                <label className="login_c">Enter Your Email address</label>
                <input type="email"  className="login_f" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Enter email" />
            </div>

            <div class="d-flex justify-content-center">
                <button type="submit"  class="col-md-8 btn btn-primary lelaa">Send Reset Link</button>
            </div>
            {/* <button type="submit" className="col-md-6 text-center btn btn-primary btn-block submit">Login</button> */}
            
        </form>
    );
}

export default Forgot;
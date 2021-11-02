import React, {useState} from "react";

const Forgot =()=>{
    const [email, setEmail] = useState("");
    return (
        <form  onSubmit={e => {
            e.preventDefault();
            // login();
            
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
import React, {Component} from "react";
import { AUTH_TOKEN, EMAIL } from "../../common/constants";
const HomeScreen =()=> {
    // const auth_token = "";
   const auth_token =  localStorage.getItem(AUTH_TOKEN);
    const email = localStorage.getItem(EMAIL);
        if(auth_token!=""){
        return(
            <div>
                <div class="d-flex justify-content-center">{email}</div></div>
        );
    }else{
        return(<div>
            <div class="d-flex justify-content-center">Welcome</div></div>);
    }
       
            
   
    
}

export default HomeScreen;
import React, {Component, useState} from "react";
import FilePage from "../../Auth/fileUploads/filepage";
import { AUTH_TOKEN, EMAIL } from "../../common/constants";
const HomeScreen =()=> {
    // const auth_token = "";
   const auth_token =  localStorage.getItem(AUTH_TOKEN);
    const email = localStorage.getItem(EMAIL);
    //     if(auth_token!=""){
    //     return(
    //         <div>
                
    //             <div class="d-flex justify-content-center">{email}</div></div>
    //     );
    // }else{
    //     return(<div>
    //         {/* <FilePage /> */}
    //         <div class="d-flex justify-content-center">Welcome</div></div>);
    // }
    return(
    <div class="d-flex justify-content-center">
        <FilePage />
    </div>
    );
  
            
   
    
}

export default HomeScreen;
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
// import { title } from "process";
import React, {Component, useState} from "react";
import FilePage from "../../Auth/fileUploads/filepage";
import { AUTH_TOKEN, EMAIL } from "../../common/constants";
import CarouselPage from "../Secrets/carouselPage";
import PostSecret from "../Secrets/postSecret";
// import Hey from "../Secrets/scroller";
// import Secret from "../Secrets/secrets";
import SecretStories from "../Secrets/secretStories";

import "./home.css";

export const SECRETQUERY = gql`
query {
secrets{
    id,
    title,
    description,
    postedOn
    } 
}`;

const HomeScreen=()=>{
    // const auth_token = "";
   const auth_token =  localStorage.getItem(AUTH_TOKEN);
    const email = localStorage.getItem(EMAIL);

    // const { data, loading} = useQuery(SECRETQUERY);

    // const [ddata, setData] = useState({
    //     title:"Helloo",
    //     description:"There"
    // });



    

    // const { loading, error, fetchedData} = useQuery(secretQuery);
    

    // const secretsData = ()=>{
    //     if(loading){
    //         alert("Is Loading");
    //     }
    //     if(data){
    //         setD(data.secrets[0].title);
    //         alert("Hello");
    //     }
    // }
    // if (loading) return <p>Loading Masterpieces...</p>

    // const setD=({title})=>{
    //     setData(() => ({
    //         title: title,          // overwrite the value of the field to update
    //         description:"It is me" // copy all other field/objects
    //       }));
    
    //     }
 {/* <Secret title={ddata.title} description={ddata.description} setDa={secretsData}/> */}
        {/* <Secret /> */}

    return(
    // <div class="d-flex justify-content-center">
            // <div class="d-flex justify-content-center">
                <div className="home">
                <CarouselPage /> 
                <PostSecret />  
                {/* <Hey />  */}
                {/* <Secret />      */}
                 {/* <SecretStories /> */}
       
     </div>
    );
}

export default HomeScreen;
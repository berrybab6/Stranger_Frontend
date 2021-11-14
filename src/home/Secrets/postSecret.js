import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React, { useState } from "react";
import "./caro.css";

const PostSecret =()=>{

    const [data, setData] = useState({title:"", descption:""})
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("I know I know");

    const postSecret = gql`
    mutation PostSecret($title:String!, $description:String!){
        createSecret(title:$title, description:$description){
            title,
            error
        }
    }`;

    const [post] = useMutation(postSecret,{
        variables:{
            title:title,
            description:description
        },
        onCompleted:({ createSecret })=>{
            if(createSecret){
                if(createSecret.error==null){
                    alert("Title: "+title);
                }else{
                    alert("Error"+ createSecret.error)
                }
            }
        }
    });
    return(
         <div class="container-fluid me">
  
    <div class="row flex-row flex-nowrap mt-4 pb-4 pt-2 mr-4">
            
            <div class="col-8 row flex-row">
                <div class=" col-3 card cardi ">
                    
                    <p>Post your Secret</p>
                </div>
                <div class=" col-6 card cardi ">
                    
                    <input placeholder="Your Secret" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}>
                    </input>
                </div>
                <div class=" col-3 card cardi ">
                   <button onClick={post}>POST</button>
                </div>
            </div>
            {/* <div class="col-8">
                <div class="card card-block card-2"></div>
            </div> */}
            
    </div>
</div>);
}

export default PostSecret;

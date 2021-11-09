import { useMutation } from '@apollo/client';
import React, {useState} from 'react';
import { AUTH_TOKEN, EMAIL } from "../../common/constants";

import gql from 'graphql-tag';
import "./imageUpload.css"
import { useHistory } from 'react-router';
const FilePage=()=>{
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const auth_token = localStorage.getItem(AUTH_TOKEN);

    const [email, setEmail] = useState("");
    const history = useHistory();
    const [lastName, setLastName] = useState("");
    const [firstName, setfirstName] = useState("")
    const imageHandler =(e)=>{
        const reader = new FileReader();
        reader.onload =()=>{
            if(reader.readyState==2){
                setImage(reader.result);
                setUrl(e.target.files[0])
                // console.log(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        console.log(e.target.files[0])
    }

    const updateProfileMutation = gql`
    mutation UpdateProfileMutation($firstName:String!, $lastName:String!){
        updateProfile(firstName:$firstName, lastName:$lastName){
            firstName,
            email,
            lastName
            
        }
    }`;

    const [updateProfile2] = useMutation(updateProfileMutation, {
        variables:{
            firstName:firstName,
            lastName:lastName
        },
        onCompleted:({updateProfile})=>{
            if(updateProfile.email){
            console.log("email: "+updateProfile.email);
            setEmail(updateProfile.firstName);
            }else{
                history.push("/sign-in");
            }
        }
    });
    return(
        <div>
            <div>
                <h1>Update Profile</h1>
            </div>
            <div>
            
            <div>
                <label>First Name
                <input type="text" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/></label>
            </div>
            <div>
                <label>LastName
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/></label>
            </div>
            <div>
                <label>
                    <input type="file" id = "input" accept="image/*" onChange={imageHandler}></input>
                </label>
            </div>
            <div >
                {(image)?<img className="imageDisp" src={image}></img>:<div></div>}
            </div>
            <div>
                <button type="submit" onClick={
                    e=>{updateProfile2();}
                }> Update</button>
            </div>
            <div>
                <h3>{email}</h3>
            </div>
            
            
           
            {/* <h3>{url}</h3> */}
        </div>
        </div>
    );
}
export default FilePage;
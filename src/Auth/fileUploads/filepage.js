import { useMutation } from '@apollo/client';
import React, {useState} from 'react';
import { AUTH_TOKEN, EMAIL } from "../../common/constants";

import gql from 'graphql-tag';
import "./imageUpload.css"
import { useHistory } from 'react-router';
const FilePage=()=>{
    const [image, setImage] = useState("");
    const [profile, setProfile] = useState("");
    const [url, setUrl] = useState(null);
    const auth_token = localStorage.getItem(AUTH_TOKEN);
    const [email, setEmail] = useState("");
    const history = useHistory();
    const [lastName, setLastName] = useState("");
    const [firstName, setfirstName] = useState("");
    const [profileUrl, setProfileUrl] = useState(null);
    
    var imgUrl = "http://127.0.0.1:8000/media/";

    const imageHandler =(e)=>{
        const reader = new FileReader();
        reader.onload =()=>{
            if(reader.readyState==2){
                setImage(reader.result);
                setUrl(e.target.files[0])
            }
        }
        reader.readAsDataURL(e.target.files[0]);

        console.log(e.target.files[0])
    }


    
    // const updateProfileMutation = gql`
    // mutation UpdateProfileMutation($firstName:String!, $lastName:String!, $profileUrl:Upload!){
    //     updateProfile(firstName:$firstName, lastName:$lastName, profileUrl:$profileUrl){
    //         firstName,
    //         email,
    //         lastName,
    //         profileUrl
            
    //     }
    // }`;
   
     
   const updateProfileMutation = gql`
   mutation UpdateProfileMutation($profileUrl:String!){
       updateProfile(profileUrl:$profileUrl){
           firstName,
           email,
           lastName
           
       }
   }`;
    const [updateProfile2] = useMutation(updateProfileMutation, {
       
        onCompleted:({updateProfile})=>{
            if(updateProfile.firstName){
            console.log("FirstName: "+updateProfile.firstName);
            // console.log("proefile: "+imgUrl+""+updateProfile.profileUrl);

            setEmail(updateProfile.email);
            // setProfile(imgUrl+updateProfile.profileUrl);
            // console.log("profile"+profile);
            }else{
                history.push("/sign-in");
            }
        }
    });

    const handleImage =(e)=>{
        const file = e.target.files[0];
        if(!file) return
        // setProfileUrl( );
        updateProfile2({variables:{
            profileUrl:file
        }});
        console.log("file Image: "+ file);
    }
  

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
                    <input type="file" id = "input" accept="image/*" onChange={updateProfile2}></input>
                </label>
            </div>
            <div >
            
            {/* <img className="imageDisp" src={profile}></img> */}

                {(image)?<img className="imageDisp" src={image} ></img>:<div></div>}
            </div>
            <div>
                <button type="submit" onClick={handleImage}
                > Update</button>
            </div>
            <div>
                <h3>{url?.name}</h3>
            </div>
            
            
           
            <h3>{email}</h3>
        </div>
        </div>
    );
}
export default FilePage;
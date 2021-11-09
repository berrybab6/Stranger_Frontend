import React, {useState} from 'react';
import "./imageUpload.css"
const FilePage=()=>{
    const [image, setImage] = useState("hey");
    const [url, setUrl] = useState("");
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
    return(
        <div>
            <div>
                <h1>Upload Image</h1>
            </div>
            <div>
                <label>First Name
                <input type="text"/></label>
            </div>
            <div>
                <label>
                    Image
                    <input type="file" id = "input" accept="image/*" onChange={imageHandler}></input>
                </label>
            </div>
            <div className="imageDisp">
                <img src={image}></img>
            </div>
            {/* <h3>{url}</h3> */}
        </div>
    );
}
export default FilePage;
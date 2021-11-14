import React, { useState, useHistory } from "react";
// import Secret from "./secrets";
import CarouselPage from "./carouselPage";
import "./caro.css";

const SecretStories =({postSecret})=>{
    const [title, setTitle] = useState("");
    onchange=()=>{
        setTitle()
    }
    // useHistory
    const history = useHistory();
    // const handlePost=({title})=>{
    //     postSecret(title);
        
    // }
    return (
        <div class="container-fluid me">
  
        <div class="row flex-row flex-nowrap mt-4 pb-4 pt-2 mr-4">
                
                <div class="col-8 row flex-row">
                    <div class=" col-4 card cardi card-2">
                        
                        <p>Post your Secret</p>
                    </div>
                    <div class=" col-4 card cardi card-2">
                        
                        <input placeholder="Your Secret" type="text" value={title} onChange={(e)=>{setTitle(title)}}>
                        </input>
                    </div>
                    <div class=" col-4 card cardi card-2">
                       <button >POST</button>
                    </div>
                </div>
                {/* <div class="col-8">
                    <div class="card card-block card-2"></div>
                </div> */}
                
        </div>
    </div>
        
    );
}
export default SecretStories;
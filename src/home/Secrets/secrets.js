import React from "react";


const Secret=({title, description})=>{
    return(
        <div className="secretTop">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
        </div>
    );
}

export default Secret;
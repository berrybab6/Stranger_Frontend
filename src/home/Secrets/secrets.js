// import React, { useEffect, useState } from "react";

// import { useQuery } from "@apollo/client";
// import gql from "graphql-tag";
// import { title } from "process";
// import "./secrets.css";
// import "./caro.css";
// const SECRETQUERY = gql`
//     query
// {
//     secrets {
//     id
//     title
    
//     }
// } 
// `;


// function Secret(){
//        const [me, setMe] = useState({title:"", description:""})

//     const { error, loading, data} = useQuery(SECRETQUERY);
//     const [title, setTitle] = useState("")
    
//     // useEffect(()=>{
//     //     alert("Data: "+ data);
//     //     // console.log("Data"+data);
//     // },[data])


//     if (loading || !data) return <p>Loading Masterpieces...</p>

//     if(error){
//         console.log("error:  "+error)
//     }
//     if (!data) return <p>Not found</p>;
   

//     // if(data){
//     //     setTitle(data.secret.title);
        
//     // }

// //    const [me, setMe] = useState({title:"", description:""})

//     return(
//         // <h1>Hello</h1>
        
//     //     <div class="container-fluid">
  
//     //     <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mr-4">
       
      
//     //       <h1>{data.secrets}</h1>

//     //      {/* {data &&
//     //         data.secrets.map((post) => {
//     //         return (<div class="col-12">
//     //         <div class="card cardu card-1">
//     //             <h3>{post.title}</h3>
//     //             <p>{post.description}</p>
//     //             </div> </div>)
            
//     //         })}
//     //          */}
            
        
      
                
//     //             {/* <div class="col-12">
//     //                 <div class="card cardu card-2"></div>
//     //             </div> */}
                
                
              
//     //     </div>
//     // </div>
//         <div className="secretTop">

//             {/* <h1 className="title">{data.secret.title}</h1> */}

//             {/* {data.secrets.map(p => <p key={p.id}>{p.title}, {p.description}</p>)} */}

//             <p className="description">"Hello There"</p>
//             <h1>{data.title}</h1>
//             {/* <button onClick={setDa}>Set Data</button> */}
//         </div>
//     );
// }

// export default Secret;
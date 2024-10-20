import React from "react";

function About (props){
     return(
       <div className='container-about' style={{ width:"95%",padding:"50px", marginTop:"100px",textAlign:"center", color:"white", fontFamily:"montserrat"}}>
        <a name="container-about"></a>
        <h2>Sobre mi</h2>
         <p>
           {props.texto}
         </p>
       </div>

     )
}

export default About
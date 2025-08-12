import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/proyectos.css'





function Proyectos (props) {
  
    return (

        <div className="container-proyect">
         <a name="container-proyect"></a>     
            
                 <img className="img-proyect" src={props.imagen}/>
              
             <div className="container-texto">
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                  <p className="txt">{props.texto}</p>
                  
                  
                  
                 
                 <div className="container-tecnologias">
                    <div className="tecnologias">{props.logo1} {props.logo2} {props.logo3}</div>
                </div>

                  <div className="txt-fijo"> 
                     <a className="enlace" href={props.enlace} target="_blank">ver proyecto completo</a>
                   </div>

             </div>
           
        </div>
    )

}

export default Proyectos
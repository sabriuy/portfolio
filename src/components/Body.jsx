import React from "react"
import imagen from './assets/foto-perfil.webp'
import  "../css/body.css";
import pdf from "./assets/curriculum.pdf"



function Body(){
   return(

    
   
       <div className="container-body">


              <div>
                  <img className="foto-perfil" src={imagen} alt="foto de perfil" />
              
              </div>

               <div className="container-txt">
                  <h1 className="titulo-nombre">Sabrina Cabrera</h1>
                 
                  <p className="subtitulo"> &lt;desarrollo web/&gt; </p>

                  
                      <div className="btn-1">
                         <a href={pdf} target="_blank" rel="noopener noreferrer" download="curriculum sabrina"><span>descargar cv</span></a>
                      </div>
                  
               </div>


       </div>
    
   ) 
}

export default Body
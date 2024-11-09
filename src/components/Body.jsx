import React from "react"
import imagen from './assets/foto-perfil.webp'
import  "../css/body.css";



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
                         <a href="/curriculum.pdf" download><span>descargar cv</span></a>
                      </div>
                  
               </div>


       </div>
    
   ) 
}

export default Body
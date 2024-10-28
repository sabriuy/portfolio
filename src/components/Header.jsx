import React from "react"
import {github} from 'bootstrap-icons/font/bootstrap-icons.css'
import '../css/header.css'



function Header(){

     


   
   return (
     <div className='container-header'>

                <div className='container-pages'>
                    <a href="#container-proyect">Proyectos</a>
                    <a href="#container-about">Sobre mi</a>
                    <a href="">Contacto</a>
               </div>          
         
         
                 <div className='container-redes'>
                      <a className="redes" href="https://github.com/sabriuy" target="_blank"><i class="bi bi-github"></i></a>
                      <a className="redes"  href="https://www.linkedin.com/in/sabrina-cabrera-68a768246" target="_blank"><i class="bi bi-linkedin"></i></a>
                      <a className="redes"  href="mailto:sabrinacabreradev@gmail.com"><i class="bi bi-envelope-arrow-up"></i></a>
 
                       <button className="toggle">
                           <i class="fas fa-bars"></i>
                       </button>
                 </div>

          
     </div>
    )
}




export default Header;


import './App.css';
import Header from './components/Header.jsx'; 
import Body from './components/Body.jsx';
import Proyectos from './components/Proyectos.jsx';
import About from './components/About.jsx'
import HtmlLogo from './components/HtmlLogo.jsx';
import CssLogo from './components/CssLogo.jsx';
import JsLogo from './components/JsLogo.jsx';
import Reactlogo from './components/Reactlogo.jsx';
import Vitelogo from './components/Vitelogo.jsx';
import Certificado from './components/Certificado.jsx';
import Skills from './components/Skills.jsx'
import Contacto from './components/Contacto.jsx';
import imagen1 from './components/assets/proyecto1.PNG'
import imagen2 from './components/assets/proyecto2.PNG'
import imagen3 from './components/assets/proyecto3.PNG'
import imagen4 from './components/assets/proyecto4.PNG'
import coder from './components/assets/coderdiploma.png'
import html5 from './components/assets/diplomaHtml5.jpg'
import css3 from './components/assets/diplomaCss3.jpeg'
import js from './components/assets/diplomaJs.jpeg'







function App() {
  return (
    <div className="App">
         <Header/>
         <Body/>

             <div className='container-principal-proyectos'>
               <Proyectos
                  imagen={imagen4}
                  texto='Página de recetas'
                  enlace='https://github.com/sabriuy/recetas-saludables'
                  logo1={<Reactlogo/>} logo2={<Vitelogo/>}
                /> 


               <Proyectos
                  imagen={imagen1}
                  texto='Diseño front-end de pagina comercial'
                  enlace='https://github.com/sabriuy/sabrina/tree/main/proyecto%20barraca-alianza'
                  logo1={<HtmlLogo/>} logo2={<CssLogo/>} logo3={<JsLogo/>}/>

               <Proyectos
                 imagen={imagen2}
                 texto='App para conocer el estado del tiempo en cualquier ciudad'
                 enlace='https://github.com/sabriuy/weather-app'
                 logo1={<HtmlLogo/>} logo2={<CssLogo/>} logo3={<JsLogo/>}/>
        
               <Proyectos 
                 imagen={imagen3}
                 texto='Carrousel de fotos aleatorias consumiendo una Api pública'
                 enlace='https://github.com/sabriuy/photoslider'
                 logo1={<HtmlLogo/>} logo2={<CssLogo/>} logo3={<JsLogo/>}/>

               
             </div>

            <About texto="En 2022, inicié mi formación en desarrollo web, completando diversos cursos en academias 
            reconocidas. Complementé mi aprendizaje con un enfoque autónomo, investigando, leyendo y creando proyectos
            que me permitieran implementar y perfeccionar mis habilidades. Desde que me adentré en el apasionante
            mundo de la programación, he adquirido conocimientos en varios lenguajes y herramientas, incluyendo HTML5, CSS,
            JavaScript y React.js."/> 
 
       <div className='container-certificados'>
       <h3 className='titulo-certificados'>Certificaciones</h3>
            <Certificado certificado={coder} textodiploma='Curso Javascript avanzado'/>
            <Certificado certificado={html5} textodiploma='Introduccion a Html5' />
            <Certificado certificado={css3}  textodiploma='Introduccion a Css3'/>
           <Certificado certificado={js} textodiploma='Interactividad con Javascript'/>
       </div>
 
       <div className='container-skills'>
       <h3>Habilidades</h3>
           <Skills skill='Manipulación del DOM' />
           <Skills skill='Promesas y programación asíncrona' />
           <Skills skill='ES6+ (arrow functions, destructuring)' />
           <Skills skill='Uso de APIs (fetch, XMLHttpRequest)' />
           <Skills skill='Componentes funcionales y de clase' />
           <Skills skill='Hooks (useState, useEffect, etc.)' />
           <Skills skill='Gestión de paquetes (npm, Yarn)' />
           <Skills skill='Control de versiones (Git, GitHub)'/>
           <Skills skill='Diseño responsivo' />
           <Skills skill='Fluidez en español, inglés y portugués' />
       </div>

       <hr></hr>

          <Contacto/>    

  </div>

  );
}

export default App;

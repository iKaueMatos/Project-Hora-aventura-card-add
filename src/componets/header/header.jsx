import React from "react";
import logo_aventura from "../../assets/logo.png" 
import './header.css'


function header() {
    return (
        <>
        <nav className="navbar">
            <div>
                 <ul className="list">
                <li className="item">
                <img  className='logo' src={logo_aventura} alt="Logo hora de aventura"></img>
                </li>
           
            
                <li className="item">
                    <a href="#inicio">Inicio</a>
                </li>
                <li className="item">
                    <a href="https://github.com/iKaueMatos">GitHub</a>
                </li>
                <li className="item">
                     <a href="https://www.linkedin.com/in/kauê-matos-oliveira-a76410213/">Linkedin</a>
                </li>
                <li className="item">
                    <a href="https://ikauematos.github.io/Portfolio/">Portfolio</a>
                </li>
              </ul>
          </div>
     </nav>
        </>

    )
}

export default header;
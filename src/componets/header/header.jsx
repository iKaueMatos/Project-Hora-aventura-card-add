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
                    <a href="#">Inicio</a>
                </li>
                <li className="item">
                    <a href="#">GitHub</a>
                </li>
                <li className="item">
                     <a href="#">Linkedin</a>
                </li>
                <li className="item">
                    <a href="#">Portfolio</a>
                </li>
              </ul>
          </div>
     </nav>
        </>

    )
}

export default header;
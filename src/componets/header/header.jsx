import React from "react";
import logo_aventura from "../../assets/logo.png" 
import './header.css'


function header() {
    return (
        
    <div>
        <header>
            <nav className="menu">
        <li>
            <img className="logo"src={logo_aventura} alt="Logo hora de aventura"/>
        </li>
        <ul>
            <li><a href="#contato">Inicio</a></li>
            <li><a href="#contato">Personagens</a></li>
            <li><a href="#contato">Informações</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
        </nav>
    </header>
    </div>

    )
}

export default header;
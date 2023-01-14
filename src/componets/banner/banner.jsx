import React from "react";
import banner from "../../assets/banner-aventura.jpg"
import './banner.css'



function Banner() {
    return (
        <div className="responsivo">
            <section className="banner_hora">
                <img  src={banner} alt="banner hora de aventura" title="Finn e Jake "/>
            </section>
        </div>
    
             
    )

}




export default Banner
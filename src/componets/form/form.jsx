import React from "react";
import './form.css';


const Form = (props) => {
    return(
        <div className="form">
             <label>{props.label}</label>
             <input placeholder={props.placeholder}/>
        </div>
       

    )
}






export default Form;
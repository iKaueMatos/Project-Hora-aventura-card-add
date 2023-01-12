import React from "react";
import './lista.css';



function Lista(props) {
    return(
        <div>
            <label>{props.label}</label>
            <select>
                {props.item.map(item => <option>{item}</option>)}
            </select>
        </div>

    )    
};



export default Lista;




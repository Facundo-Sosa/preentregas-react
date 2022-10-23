import React, {useState} from "react";
import "./Contador.css";


const Contador = () => {
    const [cont, setCont] = useState(1)
    
    const mas = () => {
        setCont(cont + 1)
    }

    const resta = () => {
        if(cont >= 2) {
            setCont(cont - 1)
        }
    }

    return (
        <div className="contador">
            <box-icon name='minus-circle' onClick={resta}></box-icon>
            <span>{cont}</span>
            <box-icon name='plus-circle' onClick={mas}></box-icon>
        </div>
    )
}

export default Contador;
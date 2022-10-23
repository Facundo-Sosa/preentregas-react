import React from "react";
import { useParams } from "react-router-dom";
import productos from "../APIs/productos"
import Contador from "../components/Contador"

const ItemDetalle = () => {
    const codigo = useParams()
    const articulo = productos.find((producto) => producto.id === parseInt(codigo.id))
    return (
        <div className="itemDetalle">
            <img 
                src={require(`../img/${articulo.img}.jpg`)}
            />
            <div>
                <h2>{articulo.nombre}</h2>
                <h2>$ {articulo.precio}</h2>
                <Contador />
            </div>
        </div>
    )
}

export default ItemDetalle;
import React from "react";
import { Link, useParams } from "react-router-dom";

const Item = ({id ,img, nombre, precio}) => {
    return (
        <div className="item">
            <img 
                className="itemImg"
                src={require(`../img/${img}.jpg`)}
            />
            <h4 className="itemNombre" >{nombre}</h4>
            <h4 className="itemPrecio" >$ {precio}</h4>
            <Link to={`/item/${id}`}>
                <button>Ver detalle</button>
            </Link>
        </div>
    )
}

export default Item;
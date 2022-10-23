import React from "react";
import productos from "../APIs/productos.js"
import Item from "../components/Item"
import './main.css'

const RemeraListContainer = () => {
    const remeras = productos.filter((producto) => producto.categoria === "remeras")
    return (
        <div className="main">
            {remeras.map((remera, i) => (
                <div key={i}>
                    <Item
                        id = {remera.id}
                        img = {remera.img}
                        nombre = {remera.nombre}
                        precio = {remera.precio}
                    />
                </div>
            ))}
        </div>
    )
}

export default RemeraListContainer;
import React from "react";
import productos from "../APIs/productos.js"
import Item from "../components/Item"
import './main.css'

const PantalonesListContainer = () => {
    const pantalones = productos.filter((producto) => producto.categoria === "pantalones")
    return (
        <div className="main">
            {pantalones.map((pantalon, i) => (
                <div key={i}>
                    <Item
                        id = {pantalon.id}
                        img = {pantalon.img}
                        nombre = {pantalon.nombre}
                        precio = {pantalon.precio}
                    />
                </div>
            ))}
        </div>
    )
}

export default PantalonesListContainer;
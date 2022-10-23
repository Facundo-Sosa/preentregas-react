import React from "react";
import productos from "../APIs/productos.js"
import Item from "../components/Item"
import './main.css'

const AccesoriosListContainer = () => {
    const accesorios = productos.filter((producto) => producto.categoria === "accesorios")
    return (
        <div className="main">
            {accesorios.map((accesorio, i) => (
                <Item
                    key={i}
                    id = {accesorio.id}
                    img = {accesorio.img}
                    nombre = {accesorio.nombre}
                    precio = {accesorio.precio}
                />
            ))}
        </div>
    )
}

export default AccesoriosListContainer;
import React from "react";
import Item from "../components/Item.js";
import productos from "../APIs/productos.js"
import "./main.css"

const MainPrincipal = () => {
    const rmv = productos.filter((producto) => (producto.id > 6) && (producto.id <= 9));
    const pmv = productos.filter((producto) => (producto.id > 9) && (producto.id < 13));
    const amv = productos.filter((producto) => (producto.id > 21) && (producto.id < 25))
    
    return (
        <div className="mainPrincipal">
            <div className="modelos">
                <img 
                    src={require("../img/modelos1.jpg")}
                />
                <img 
                    src={require("../img/modelos2.jpg")}
                />
            </div>
            <div>
                <h1>REMERAS MAS VENDIDAS</h1>
                <div className="masVendido">
                    {rmv.map((remeras, i) => (
                        <Item
                            key = {i}
                            img = {remeras.img}
                            nombre = {remeras.nombre}
                            precio = {remeras.precio}
                        />                      
                    ))}
                </div>
            </div>
            <div>
                <h1>PANTALONES MAS VENDIDOS</h1>
                <div className="masVendido">
                    {pmv.map((pantalones, i) => (
                        <Item
                            key = {i}
                            img = {pantalones.img}
                            nombre = {pantalones.nombre}
                            precio = {pantalones.precio}
                        />                      
                    ))}
                </div>
            </div>
            <div>
                <h1>ACCESORIOS MAS VENDIDOS</h1>
                <div className="masVendido">
                    {amv.map((accesorios, i) => (
                        <Item
                            key = {i}
                            img = {accesorios.img}
                            nombre = {accesorios.nombre}
                            precio = {accesorios.precio}
                        />                      
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainPrincipal;
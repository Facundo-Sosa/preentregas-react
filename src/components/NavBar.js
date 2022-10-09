import React from "react";
import Carrito from './CardWidget';


function NavBar() {
    return (
        <div className="navBar">
            <img className="logo"
                src={require('../img/logo.png')}
            />
            <a href="#">Remeras</a>
            <a href="#">Pantalones</a>
            <a href="#">Accesorios</a>
            <Carrito />
        </div>
    )
}

export default NavBar;
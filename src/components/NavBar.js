import React from "react";
import Carrito from './CardWidget';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navBar">
            <Link to="/">
                <img className="logo" src={require('../img/logo.png')} />
            </Link>
            <Link to="/remeras">
                Remeras
            </Link>
            <Link to="/pantalones">
                Pantalones
            </Link>
            <Link to="/accesorios">
                Accesorios
            </Link>
            <Carrito />
        </nav>    
    )
}

export default NavBar;
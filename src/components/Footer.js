import React from "react";

const Footer = () => {
    return (
        <footer>
            <h2>Redes</h2>
            <div className="redes">
                <div>
                <a href="#" target="_blank"><img src={require("../img/fb icon.png")} height="30px" alt="" /></a>
                </div>
                <div>
                <a href="#" target="_blank"> <img src={require("../img/inta logo.png")} height="30px" alt="" /></a>
                </div>
                <div>
                <a href="#" target="_blank"> <img src={require("../img/twitter logo.png")} height="30px" alt="" /></a>
                </div>
            </div>
        <h3>© 2022.Todos los derechos reservados.</h3>
        </footer>
    )
}

export default Footer;
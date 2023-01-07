import React from "react";
import Logo from '../img/MI-Logo.gif'
import "../css/Nav.css"


function Navegador({li1,li2,li3,li4}){
    return(
        <nav className="Nav-main">
            <img
            className="MiLogo"
            src={Logo}
            alt="Logo Personal"
            />
            <ul className="list-nav">
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
            </ul>
        </nav>
    )
}

export default Navegador
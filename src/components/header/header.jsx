import React from "react";
import "./header.css";
import logo from "../../images/logo_V2.png";
import aubergine from "../../images/aubergine.png";

function Header() {
  return (
    <header>
      <div className="header-section">
        <img className="logo" src={logo} />
        <h1 className="title">LES RECETTES QUI VOUS FERONT OUBLIER LA VIANDE</h1>
        <img className="aubergine" src={aubergine} />
        <p>menu déroulant</p>
      </div>
    </header>
  );
}

export default Header;

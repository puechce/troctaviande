import React from "react";
import "./header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header>
      <div className="header-section">
        <img className="logo" src={logo} />
        <h1>LES RECETTES QUI VOUS FERONT OUBLIER LA VIANDE</h1>
        <p>menu déroulant</p>
      </div>
    </header>
  );
}

export default Header;

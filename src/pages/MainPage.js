import React from "react";
import "./mainPage.css";
import img from "../images/hamburger.jpg";

function MainPage() {
  return (
    <div className="main-page-body">
      <div className="main-page-center">
        <h1>Sélectionner une recette mythique</h1>
        <input id="recepie-sb"></input>
        <h1>Surprends moi !!</h1>
        <button className="mode-button">Générer une recette aléatoire</button>
      </div>
      <h1>Nos dernières recettes</h1>
      <div className="main-page-foot">
        <img src={img} />
        <img src={img} />
        <img src={img} />
      </div>
    </div>
  );
}
export default MainPage;

import React from "react";
import "./mainPage.css";

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
    </div>
  );
}
export default MainPage;

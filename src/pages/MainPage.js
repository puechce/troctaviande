import React from "react";
import "./mainPage.css";
import hamburger from "../images/hamburger.jpg";

function MainPage() {
  return (
    <div className="main-page-body">
      <div className="main-page-center">
        <h1>Trouver ma recette version végé</h1>
        <body>Toute recette est déclinable en version végétarienne, retrouvez vos plats préférés en version végé !</body>
        <input id="recepie-sb"></input>
        <h1>Surprends moi !!</h1>
        <body>A court d'inspiration ? On se charge de trouver une recette pour vous</body>
        <button className="mode-button">Générer une recette aléatoire</button>
      </div>
      <h1>Nos dernières recettes</h1>
      <div className="main-page-foot">
        <img src={hamburger} />
        <img src={hamburger} />
        <img src={hamburger} />
      </div>
    </div>
  );
}
export default MainPage;

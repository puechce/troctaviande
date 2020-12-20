import React from "react";
import "./mainPage.css";
import hamburger from "../images/hamburger.jpg";
import poireau from "../images/poireau-small.jpg";
import poivron from "../images/poivron.jpg";


function MainPage() {
  return (
    <div className="main-page-body">
      <div className="main-page-center">
      <img className="poireau" src={poireau} />
      <div className="recette">
        <h1>Trouver ma recette version végé</h1>
        <body>Toute recette est déclinable en version végétarienne, retrouvez vos plats préférés en version végé !</body>
        <input id="recepie-sb"></input>
      </div>
      <div className="aleatoire">
        <h1>Surprends moi !!</h1>
        <body>A court d'inspiration ? On se charge de trouver une recette pour vous</body>
        <button className="mode-button">Générer une recette aléatoire</button>
      </div>
      </div>
      <h1 className="blog">Nos dernières recettes</h1>
      <div className="main-page-foot">
        <img src={hamburger} />
        <img src={hamburger} />
        <img src={hamburger} />
      </div>
    </div>
  );
}
export default MainPage;

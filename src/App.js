import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import MainPage from "./pages/MainPage.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <MainPage />
      </div>
    </div>
  );
}

export default App;

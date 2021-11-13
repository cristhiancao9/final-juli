import React from "react";
import "../App";
import "./Card.css";
import data from "./data";

function Cards() {
  return (
    <div className="App">
      <div>
        <p className="titulo">Creemos un lindo recuerdo de nuestro amor</p>
      </div>
      <div className="main">
        {data.home.map((e, i) => (
          <div key={i} className="contenedor-card">
            <img className="im" src={e} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

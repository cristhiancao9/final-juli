import React from "react";
import "../App";
import "./Card.css";
import data from "./data";
import { Link } from "react-router-dom";
function Cards() {
  /*   var k = [];
  k.push(data.home.map((e) => e.replace("static/media/", ""))); */
  return (
    <div className="App">
      <div>
        <p className="titulo">Creemos un lindo recuerdo de nuestro amor</p>
      </div>
      <div className="main">
        {data.home.map((e, i, k) => (
          /*   (k = e.replace("static/media/", "")), */
          <div key={i} className="contenedor-card">
            <div>{(k = e.replace("static/media/", ""))}</div>
            <Link to={`/teamo/${k}`}>
              <img className="im" src={e} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

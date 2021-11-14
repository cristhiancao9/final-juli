import React from "react";
import "./Frase.css";
import data from "./data";
export default function Frase({ city }) {
  console.log(city);
  return (
    <div className="ciudad">
      <div className="container2">
        <p className="titulo">{data.frase[city]}</p>
        {/*        {city &&
          data.frase.map((f) =>
            f === city ? (
              data.frase.map((e, i) => (
                <p key={i} className="titulo">
                  {e}
                </p>
              ))
            ) : (
              <p>te amo</p>
            )
          )} */}
      </div>
    </div>
  );
}

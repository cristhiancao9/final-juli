import React from "react";
import "./App.css";
import "../src/components/Card.css";
import "./components/style.css";
import Starts from "./components/Starts.jsx";
import Cards from "./components/Cards";
import Frase from "./components/Frase";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

function App() {
  function onFilter(ciudadId) {
    console.log(ciudadId);
    let buscarPunto = ciudadId.indexOf(".");
    let ciudad = ciudadId.charAt(0);
    if (ciudad.length > 0) {
      if (buscarPunto === 1) {
        return ciudadId.slice(0, 1);
      }
      if (buscarPunto === 2) {
        return ciudadId.slice(0, 2);
      }
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Redirect to="/cards" />
      <Starts></Starts>
      <Switch>
        <Route path="/cards">
          <Cards />
        </Route>
        <Route
          path="/teamo//:Id"
          render={({ match }) => <Frase city={onFilter(match.params.Id)} />}
        />
      </Switch>
      {/*   */}
    </div>
  );
}

export default App;

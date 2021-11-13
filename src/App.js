import React from "react";
import "./App.css";
import "../src/components/Card.css";
import "./components/style.css";
import Starts from "./components/Starts.jsx";
import Cards from "./components/Cards";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
function App() {
  return (
    <div className="App">
      <Redirect to="/cards" />
      <Starts></Starts>
      <Switch>
        <Route path="/cards">
          <Cards />
        </Route>
      </Switch>
      <Starts></Starts>
    </div>
  );
}

export default App;

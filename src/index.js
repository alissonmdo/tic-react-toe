import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";

import "./styles/main.css";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">TIC-REACT-TOE</h1>
      <h2 className="app-description">The tutorial, but better!</h2>
      <Game />
    </div>
  );
}

const rootElement = document.getElementById("root");
var noscript = document.getElementsByTagName("noscript");
var parent = document.getElementsByTagName("body");
parent[0].removeChild(noscript[0]);

ReactDOM.render(<App />, rootElement);

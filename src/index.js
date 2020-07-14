import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import App from "./App";
import Live from "./Live";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Login />
    <Live />
  </React.StrictMode>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CurrentUserContext from "./components/CurrentUserContext";
ReactDOM.render(
  <CurrentUserContext>
    <App />
  </CurrentUserContext>,
  document.getElementById("root")
);

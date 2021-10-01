import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import alertify from "alertifyjs";
import "../node_modules/alertifyjs/build/alertify";
import "../node_modules/alertifyjs/build/css/alertify.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { UseContextProvider } from "./HooksExample/useContextExample.js";
//4-wrapp all app with provider
ReactDOM.render(
  <UseContextProvider>
    <App />
  </UseContextProvider>,
  document.getElementById("root")
);

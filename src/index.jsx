import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

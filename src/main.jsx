import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

import App from "./App";

import "./styles/styles.sass";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App>
        <AppRouter />
      </App>
    </HashRouter>
  </React.StrictMode>
);

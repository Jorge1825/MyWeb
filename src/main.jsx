import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/styles.sass";
import "./index.css";
import 'animate.css';
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

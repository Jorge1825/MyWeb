import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

import {store} from './stores/auth/authStore'
import {Provider} from 'react-redux'

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
      <AppRouter />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

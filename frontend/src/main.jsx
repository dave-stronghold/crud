import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import './index.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider theme={defaultTheme}>
      <App />
    </Provider>
  </React.StrictMode>
);

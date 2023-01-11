import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import FilmsProvider from "./Context/Films";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilmsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilmsProvider>
  </React.StrictMode>
);

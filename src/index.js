import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import "./styles/global.css"; // Assuming this is a CSS file for global styles

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  root
);

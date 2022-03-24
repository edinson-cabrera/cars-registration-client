import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import Index from "./views/Index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

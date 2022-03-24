import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import Index from "./views/Index.js";
import Create from "./views/Create.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car from "./views/Car";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/create" element={<Create />} />
      <Route path="/car/:id" element={<Car />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

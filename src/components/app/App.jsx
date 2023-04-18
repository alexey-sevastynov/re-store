import React from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../pages/MainPage";
import CardPage from "../pages/CardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="cart" element={<CardPage />} />
      </Route>
    </Routes>
  );
}

export default App;

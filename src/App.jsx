import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ".App.scss";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* MAKE NOT FOUND PAGE */}
      </Routes>
      <WarehouseDetails />
    </BrowserRouter>
  );
}

export default App;

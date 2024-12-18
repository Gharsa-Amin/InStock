import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AddNewWarehouse />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* MAKE NOT FOUND PAGE */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryList from "./components/InventoryList/InventoryList";
//import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>
      <InventoryList />
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes></Routes>
    // </BrowserRouter>
    <div>
      <WarehouseDetails />
    </div>
  );
}

export default App;

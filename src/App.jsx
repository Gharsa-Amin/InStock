import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./App.scss";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inventory" element={<InventoryPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ".App.scss";


function App() {
  return (
    // <BrowserRouter>
      <Header />
    //   <Routes>
        <Route path="/" element={<HomePage />} />
        {/* MAKE NOT FOUND PAGE */}
      </Routes>
    // </BrowserRouter>
    <div>
      <WarehouseDetails />
    </div>
  );
}

export default App;

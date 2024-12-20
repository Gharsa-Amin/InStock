import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import HomePage from "./pages/HomePage/HomePage";
import WarehouseInventoryList from "./components/WarehouseInventory/WarehouseInventory";

import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";

import InventoryList from "./components/InventoryList/InventoryList";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <AddNewWarehouse /> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/warehouses/:id" element={<WarehouseInventoryList />} />
        {/* MAKE NOT FOUND PAGE */}
      </Routes>

      {/* <InventoryList /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

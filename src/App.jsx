import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import HomePage from "./pages/HomePage/HomePage";
import WarehouseInventoryList from "./components/WarehouseInventory/WarehouseInventory";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";

import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import InventoryList from "./components/InventoryList/InventoryList";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <InventoryHeader /> */}
      {/* <WarehouseList /> */}
      <AddNewWarehouse />
      {/* <AddNewInventory /> */}
      <Routes>
        <Route
          path="/inventory/:inventoryId"
          element={<InventoryDetails />}
        ></Route>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
        {/* MAKE NOT FOUND PAGE */}

        {/* <InventoryList /> */}
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        {/* MAKE NOT FOUND PAGE */}
      </Routes>
      {/* <InventoryList /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

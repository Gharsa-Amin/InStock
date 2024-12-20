import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import HomePage from "./pages/HomePage/HomePage";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import InventoryList from "./components/InventoryList/InventoryList";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import InventoryHeader from "./components/WarehouseListHeader/WarehouseListHeader";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import DeleteInventoryItem from "./components/DeleteInventoryItem/DeleteInventoryItem";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <InventoryList />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/warehouses" element={<WarehouseList />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        <Route path="/inventory" element={<InventoryList />} />
        {/* MAKE NOT FOUND PAGE */}
      </Routes>

      {/* <AddNewWarehouse />
      <InventoryHeader />
      <AddNewInventory />
      <InventoryDetails /> */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;

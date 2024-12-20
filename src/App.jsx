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
import WarehouseEdit from "./components/WarehouseEdit/WarehouseEdit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <InventoryHeader />
      <WarehouseList />
      <AddNewWarehouse /> */}
      {/* <AddNewInventory /> */}
      <Routes>
        <Route
          path="/inventory/:inventoryId"
          element={<InventoryDetails />}
        ></Route>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/warehouses/:id" element={<WarehouseDetails />} /> */}
        {/* MAKE NOT FOUND PAGE */}
      </Routes>
      <InventoryList />
      {/* <WarehouseEdit /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

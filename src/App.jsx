import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import Footer from "./components/Footer/Footer";
import InventoryHeader from "./components/WarehouseListHeader/WarehouseListHeader";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import InventoryPage from "./pages/InventoryPage/IventoryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <AddNewInventory /> */}
      <Routes>
        <Route path="/" element={<WarehousePage />}></Route>
        <Route path="/inventory" element={<InventoryPage />}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={<InventoryDetails />}
        ></Route>
        <Route path="/addWarehouses" element={<AddNewWarehouse />}></Route>
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        {/* MAKE NOT FOUND PAGE */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

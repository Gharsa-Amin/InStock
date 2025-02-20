import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import Header from "./components/Header/Header";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import Footer from "./components/Footer/Footer";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import InventoryPage from "./pages/InventoryPage/IventoryPage";
import WarehouseEdit from "./components/WarehouseEdit/WarehouseEdit";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";
import EditInventory from "./components/EditInventory/EditInventory";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route
          path="/inventory/:inventoryId"
          element={<InventoryDetails />}
        ></Route>
        <Route path="/inventory/edit/:id" element={<EditInventory />} />
        <Route path="/addWarehouses" element={<AddNewWarehouse />} />
        <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
        <Route path="/addinventories" element={<AddNewInventory />}></Route>
        <Route path="/editWarehouses/:id" element={<WarehouseEdit />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

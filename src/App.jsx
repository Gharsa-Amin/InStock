import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import Header from "./components/Header/Header";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import Footer from "./components/Footer/Footer";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import InventoryPage from "./pages/InventoryPage/IventoryPage";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";
import WarehouseInventory from "./components/WarehouseInventory/WarehouseInventory";

/* MAKE NOT FOUND PAGE */
import WarehouseEdit from "./components/WarehouseEdit/WarehouseEdit";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<WarehousePage />}></Route>
				<Route path="/inventory" element={<InventoryPage />}></Route>
				<Route
					path="/inventory/:inventoryId"
					element={<InventoryDetails />}
				></Route>
				<Route path="/addWarehouses" element={<AddNewWarehouse />}></Route>
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

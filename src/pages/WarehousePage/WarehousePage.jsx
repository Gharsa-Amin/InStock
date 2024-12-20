import WarehouseListHeader from "../../components/WarehouseListHeader/WarehouseListHeader";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory";

export default function WarehousePage() {
	return (
		<>
			<WarehouseListHeader />
			<WarehouseList />
		</>
	);
}

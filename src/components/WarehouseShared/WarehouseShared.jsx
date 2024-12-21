import WarehouseList from "../WarehouseList/WarehouseList";
import WarehouseListHeader from "../WarehouseListHeader/WarehouseListHeader";
import WarehouseNav from "../WarehouseNav/WarehouseNav";

export default function WarehouseShared() {
	return (
		<section className="warehouse-page">
			<div className="child">
				<WarehouseListHeader />
				<WarehouseNav />
				<WarehouseList />
			</div>
		</section>
	);
}

import WarehouseList from "../WarehouseList/WarehouseList";
import WarehouseListHeader from "../WarehouseListHeader/WarehouseListHeader";
import WarehouseNav from "../WarehouseNav/WarehouseNav";
import "./WarehouseShared.scss";
export default function WarehouseShared() {
	return (
		<section className="warehouse-page">
			<section className="child">
				<WarehouseListHeader />
				<WarehouseNav />
				<WarehouseList />
			</section>
		</section>
	);
}

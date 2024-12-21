import WarehouseListHeader from "../../components/WarehouseListHeader/WarehouseListHeader";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import "./WarehousePage.scss";

export default function WarehousePage() {
  return (
    <div className="warehouse-page">
      <WarehouseListHeader />
      <WarehouseList />
    </div>
  );
}

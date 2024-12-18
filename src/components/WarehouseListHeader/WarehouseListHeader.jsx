import search from "../../assets/icons/search-24px.svg";
export default function WarehouseListHeader() {
	return (
		<section>
			<div className="warehouses">Warehouses</div>
			<button>
				searc...
				<img src={search} alt="" />
			</button>
			<button>+Add New Warehouse</button>
		</section>
	);
}

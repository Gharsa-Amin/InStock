import SortSVG from "../SortSVG/SortSVG";
import "./WarehouseNav.scss";
export default function () {
	return (
		<>
			<div className="warehouse-top__row">
				<div className="warehouse-top__row-title">
					<h3>WAREHOUSE</h3>
					<SortSVG />
				</div>
				<div className="warehouse-top__row-title">
					<h3>ADDRESS</h3>
					<SortSVG />
				</div>
				<div className="warehouse-top__row-title">
					<h3>CONTACT NAME</h3>
					<SortSVG />
				</div>
				<div className="warehouse-top__row-title">
					<h3>CONTACT INFORMATION</h3>
					<SortSVG />
				</div>
				<div className="warehouse-top__row-title">
					<h3>ACTIONS</h3>
					<SortSVG />
				</div>
			</div>
		</>
	);
}

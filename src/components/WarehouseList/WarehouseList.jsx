import "./WarehouseList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import remove from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import WarehouseListHeader from "../WarehouseListHeader/WarehouseListHeader";
import SortSVG from "../SortSVG/SortSVG";
import WarehouseDelete from "../WarehouseDelete/WarehouseDelete";

export default function WarehouseList({}) {
	const [warehouses, setWarehouses] = useState([]);
	const [selectedWarehouse, setSelectedWarehouse] = useState(null);
	const [isModalOpen, setisModalOpen] = useState(false);
	const openModal = (warehouse) => {
		setSelectedWarehouse(warehouse);
		setisModalOpen(true);
	};

	const closeModal = () => {
		setSelectedWarehouse(null);
		setisModalOpen(false);
	};
	useEffect(() => {
		const fetchWarehouses = async () => {
			const URL = "http://localhost:8080/api/warehouses";
			try {
				const response = await axios.get(URL);
				console.log(response.data);

				setWarehouses(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchWarehouses();
	}, []);
	// const handleDelete = async (warehouseId) => {
	// 	try {
	// 		const URL = `http://localhost:8080/api/warehouses/${warehouseId}`;
	// 		await axios.delete(URL);

	// 		setWarehouses((prev) =>
	// 			prev.filter((warehouse) => warehouse.id !== warehouseId)
	// 		);
	// 		setSelectedWarehouse(null);
	// 	} catch (error) {
	// 		console.error("Error deleting inventory item:", error);
	// 	}
	// };

	return (
		<>
			<section className="warehouse-list">
				<div className="warehouse-top__row">
					<div className="warehouse-top__row-title">
						<h3>WAREHOUSE</h3>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
								fill="#5C667E"
							/>
						</svg>
					</div>
					<div className="warehouse-top__row-title">
						<h3>ADDRESS</h3>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
								fill="#5C667E"
							/>
						</svg>
					</div>
					<div className="warehouse-top__row-title">
						<h3>CONTACT NAME</h3>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
								fill="#5C667E"
							/>
						</svg>
					</div>
					<div className="warehouse-top__row-title">
						<h3>CONTACT INFORMATION</h3>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
								fill="#5C667E"
							/>
						</svg>
					</div>
					<div className="warehouse-top__row-title">
						<h3>ACTIONS</h3>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
								fill="#5C667E"
							/>
						</svg>
					</div>
				</div>
				{warehouses.map((warehouse) => (
					<div key={warehouses.id}>
						<div className="top-tablet">
							<div className="warehouse-list__names">
								<h3 className="warehouse-list__title">WAREHOUSE</h3>
								<div className="warehouse-wrapper">
									<p className="warehouse-list__name">
										{warehouse.warehouse_name}
									</p>
									<img className="warehouse-list__image" src={chevron} />
								</div>
							</div>
							<div className="warehouse-list__contact">
								<h3 className="warehouse-list__contact-name">CONTACT NAME</h3>
								<div className="warehouse-name">{warehouse.contact_name}</div>
							</div>
							{/* </div> */}
							{/* <div className="bottom-wrapper"> */}
							<div className="wrapper-item">
								<div className="warehouse-list__address">
									<h3 className="warehouse-list__address-title">ADDRESS</h3>
									<p className="warehouse-list__street">{warehouse.address},</p>
									<p className="warehouse-list__city">{warehouse.city},</p>
									<p className="warehouse-list__country">
										{warehouse.country},
									</p>
									<img className="warehouse-list__image" src={remove} />
								</div>
							</div>
							<div className="wrapper-item">
								<div className="warehouse-list__contact-tablet">
									<div className="warehouse-name">{warehouse.contact_name}</div>
								</div>
							</div>
							<div className="wrapper-item">
								<div className="warehouse-list__contact-details">
									<h3 className="warehouse-list__contact-header">
										CONTACT INFORMATION
									</h3>
									<div className="warehouse-list__phone">
										{warehouse.contact_phone}
									</div>
									<div className="warehouse-list__email">
										{warehouse.contact_email}
									</div>
									<img
										className="warehouse-list__image-contact"
										src={edit}
										alt=""
									/>
								</div>
							</div>
							<div className="wrapper-item">
								<div className="warehouse-actions">
									<img
										className="warehouse-list__image-tablet"
										onClick={openModal}
										src={remove}
									/>
									<img
										className="warehouse-list__image-tablet"
										src={edit}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					// </div>
				))}
			</section>

			{isModalOpen ? (
				<WarehouseDelete
					closeModal={closeModal}
					isModalOpen={isModalOpen}
					setisModalOpen={setisModalOpen}
				/>
			) : (
				""
			)}
		</>
	);
}

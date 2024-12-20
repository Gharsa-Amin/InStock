import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WarehouseDelete(
	closeModal,
	isModalOpen,
	setisModalOpen
) {
	const [warehouses, setWarehouses] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);
	useEffect(() => {
		const fetchWarehouses = async () => {
			const URL = "http://localhost:8080/api/warehouses";
			try {
				const response = await axios.get(URL);
				setWarehouses(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchWarehouses();
	}, []);

	const handleDelete = async (warehouseId) => {
		try {
			const URL = `http://localhost:8080/api/warehouses/${warehouseId}`;
			await axios.delete(URL);

			setWarehouses(
				warehouses.filter((warehouse) => warehouse.id !== warehouseId)
			);
			setShowModal(false);
		} catch (error) {
			console.error("Error deleting warehouse:", error);
		}
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	const confirmDelete = (warehouseId) => {
		setSelectedWarehouseId(warehouseId);
		setShowModal(true);
	};

	return (
		<section>
			<h1>Warehouses</h1>
			<ul>
				{warehouses.map((warehouse) => (
					<li key={warehouse.id}>
						<div>{warehouse.warehouse_name}</div>
						<button onClick={() => confirmDelete(handleDelete)}>Delete</button>
					</li>
				))}
			</ul>

			{showModal && (
				<div className="modal">
					<div className="modal-content">
						<h2>
							Please confirm that you would like to delete the{" "}
							{selectedWarehouseId} from the list of warehouses. You won't be
							able to undo this action.
						</h2>
						<button onClick={() => handleDelete(selectedWarehouseId)}>
							Yes, delete
						</button>
						<button onClick={closeModal}>Cancel</button>
					</div>
				</div>
			)}
		</section>
	);
}

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WarehouseDelete({
	closeModal,
	isModalOpen,
	setisModalOpen,
	warehouse,
	setWarehouses,
}) {
	const handleDelete = async () => {
		try {
			console.log("test");
			const URL = `http://localhost:8080/api/warehouses/${warehouse.id}`;
			await axios.delete(URL);
			setisModalOpen(false);
		} catch (error) {
			console.error("Error deleting warehouse:", error);
		}
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
	};

	const handleCancel = () => {
		setisModalOpen(false);
	};

	return (
		<section>
			<h1>Warehouses</h1>
			<div className="modal">
				<div className="modal-content">
					<h2>
						Please confirm that you would like to delete the from the list of
						warehouses. You won't be able to undo this action.
					</h2>
					<button onClick={() => handleDelete()}>Yes, delete</button>
					<button onClick={closeModal}>Cancel</button>
				</div>
			</div>
		</section>
	);
}

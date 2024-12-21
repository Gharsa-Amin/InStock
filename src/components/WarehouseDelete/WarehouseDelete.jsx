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
		<div className="modal-backdrop">
			<div className="modal">
				<div className="modal__close">
					<svg
						onClick={handleDelete}
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
							fill="#13182C"
						/>
					</svg>
				</div>
				<div className="modal__content">
					<div className="modal__content-wrapper">
						<h1 className="modal__header">Delete warehouse item?</h1>
						<p className="modal__text">
							Please confirm that you would like to delete warehouse from the
							inventory list. You won't be able to undo this action.
						</p>
					</div>
					<div className="modal-buttons">
						<button
							onClick={() => handleDelete()}
							className="modal-buttons__cancel"
						>
							Yes, delete
						</button>
						<button onClick={closeModal} className="modal-buttons__delete">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

import "./WarehouseList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

export default function WarehouseList({}) {
	const [warehouses, setWarehouses] = useState([]);

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
	return (
		<section className="warehouse-list">
			{warehouses.map((warehouse) => (
				<div key={warehouses.id}>
					<div className="warehouse-list__name">
						<h3>WAREHOUSE</h3>
						<p>{warehouse.warehouse_name}</p>
					</div>
					<div className="warehouse-list__address">
						<h3>ADDRESS</h3>
						<p>{warehouse.address}</p>
						<p>{warehouse.city}</p>
						<p>{warehouse.country}</p>
					</div>
					<div className="warehouse-list__contact">
						<h3>CONTACT NAME</h3>
						<div>{warehouse.contact_name}</div>
					</div>
					<div className="warehouse-list__contact-details">
						<h3>CONTACT INFORMATION</h3>
						<div className="warehouse-list__phone">
							{warehouse.contact_phone}
						</div>
						<div className="warehouse-list__email">
							{warehouse.contact_email}
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

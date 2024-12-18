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
				<Link key={warehouses.id}>
					<div className="warehouse-list__name">
						{warehouses.warehouse_name}
					</div>
					<div className="warehouse-list__address">{warehouse.address}</div>
					<div className="warehouse-list__city">{warehouse.city}</div>
					<div className="warehouse-list__contact">
						{warehouse.contact_name}
					</div>
					<div className="warehouse-list__position">
						{warehouse.contact_position}
					</div>
					<div className="warehouse-list__phone">{warehouse.contact_phone}</div>
					<div className="warehouse-list__email">{warehouse.contact_email}</div>
				</Link>
			))}
		</section>
	);
}

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
		<section className="warehouse-page">
			<WarehouseListHeader />
			<section className="warehouse-list">
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

				{warehouses.map((warehouse) => (
					<div key={warehouse.id}>
						<div className="top-tablet">
							<div className="warehouse-list__names">
								<h3 className="warehouse-list__title">WAREHOUSE</h3>
								<div className="warehouse-wrapper">
									<p className="warehouse-list__name">
										{warehouse.warehouse_name}
									</p>
									<img
										className="warehouse-list__imageTablet"
										src={chevron}
										alt="chevron"
									/>
									<img
										className="warehouse-list__image"
										src={chevron}
										alt="chevron"
									/>
								</div>
							</div>

							<div className="warehouse-list__contact">
								<h3 className="warehouse-list__contact-name">CONTACT NAME</h3>
								<div className="warehouse-name">{warehouse.contact_name}</div>
							</div>

							<div className="wrapper-item">
								<div className="warehouse-list__address">
									<h3 className="warehouse-list__address-title">ADDRESS</h3>
									<p className="warehouse-list__street">{warehouse.address}</p>
									<p className="warehouse-list__city">{warehouse.city}</p>
									<p className="warehouse-list__country">{warehouse.country}</p>
									<img
										className="warehouse-list__image"
										src={remove}
										alt="remove"
									/>
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
										alt="edit"
									/>
								</div>
							</div>

							<div className="wrapper-item">
								<div className="warehouse-actions">
									<img
										className="warehouse-list__image-tablet"
										src={remove}
										alt="remove"
									/>
									<img
										className="warehouse-list__image-tablet"
										src={edit}
										alt="edit"
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
		</section>
	);
}

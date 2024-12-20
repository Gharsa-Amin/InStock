import { useState, useEffect } from "react";
import "./AddNewInventory.scss";

export default function AddNewInventory({ onAddInventory, warehouses }) {
	const [inventoryName, setInventoryName] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [inStock, setInStock] = useState("");
	const [quantity, setQuantity] = useState("");
	const [warehouse, setWarehouse] = useState("");
	const [inventoryNameError, setInventoryNameError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);
	const [categoryError, setCategoryError] = useState(false);
	const [inStockError, setInStockError] = useState(false);
	const [quantityError, setQuantityError] = useState(false);
	const [warehouseError, setWarehouseError] = useState(false);

	useEffect(() => {
		// Example to fetch categories or warehouses dynamically
		// fetchCategories();
		// fetchWarehouses();
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();

		setInventoryNameError(!inventoryName);
		setDescriptionError(!description);
		setCategoryError(!category);
		setInStockError(!inStock);
		setQuantityError(inStock === "In Stock" && !quantity);
		setWarehouseError(inStock === "In Stock" && !warehouse);

		if (
			!inventoryName ||
			!description ||
			!category ||
			!inStock ||
			(inStock === "In Stock" && (!quantity || !warehouse))
		) {
			return;
		}

		const newInventory = {
			inventoryName,
			description,
			category,
			inStock,
			quantity: inStock === "In Stock" ? quantity : 0,
			warehouse: warehouse,
		};

		try {
			// Assume there's a backend API to handle this request
			// const response = await axios.post(`${API_URL}/inventory`, newInventory);
			// Simulate the successful response:
			onAddInventory(newInventory); // Add new inventory to the list

			setInventoryName("");
			setDescription("");
			setCategory("");
			setInStock("");
			setQuantity("");
			setWarehouse("");
		} catch (error) {
			console.error("Failed to add inventory", error);
		}
	};

	return (
		<div className="new-inventory">
			<div className="new-inventory__wrapper">
				<div className="header-wrapper">
					<h1 className="h1">
						<svg
							className="arrow-back"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
								fill="#2E66E6"
							/>
						</svg>
						Add New Inventory Item
					</h1>
				</div>

				<form onSubmit={handleSubmit} className="new-inventory__form">
					<div className="new-inventory__form-wrapper">
						<div className="details details--inventory">
							<h2 className="inventory__header">Item Details</h2>
							<div className="inventory__info-wrapper">
								<label className="inventory__label">Item Name</label>
								<input
									type="text"
									name="inventoryName"
									placeholder="Inventory Name"
									value={inventoryName}
									className={`inventory__input ${
										inventoryNameError ? "error" : ""
									}`}
									onChange={(e) => {
										setInventoryName(e.target.value);
										setInventoryNameError(false);
									}}
								/>
								{inventoryNameError && (
									<p className="error-message">
										<svg
											className="error-svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
												fill="#C94515"
											/>
										</svg>
										This field is required
									</p>
								)}
							</div>

							{/* Description */}
							<div className="inventory__info-wrapper">
								<label className="inventory__label">Description</label>
								<input
									type="text"
									name="description"
									placeholder="Description"
									value={description}
									className={`inventory__input ${
										descriptionError ? "error" : ""
									}`}
									onChange={(e) => {
										setDescription(e.target.value);
										setDescriptionError(false);
									}}
								/>
								{descriptionError && (
									<p className="error-message">
										<svg
											className="error-svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
												fill="#C94515"
											/>
										</svg>
										This field is required
									</p>
								)}
							</div>

							{/* Category */}
							<div className="inventory__info-wrapper">
								<label className="inventory__label">Category</label>
								<select
									name="category"
									value={category}
									className={`inventory__input ${categoryError ? "error" : ""}`}
									onChange={(e) => {
										setCategory(e.target.value);
										setCategoryError(false);
									}}
								>
									<option value="">Select Category</option>
									<option value="Electronics">Electronics</option>
									<option value="Clothing">Clothing</option>
									<option value="Home Goods">Home Goods</option>
									<option value="Toys">Toys</option>
								</select>
								{categoryError && (
									<p className="error-message">
										<svg
											className="error-svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
												fill="#C94515"
											/>
										</svg>
										This field is required
									</p>
								)}
							</div>

							<div className="inventory__info-wrapper">
								<label className="inventory__label">Status</label>

								<div
									className={`status-circle ${
										inStock === "In Stock" ? "active" : ""
									}`}
									onClick={() => {
										setInStock("In Stock");
										setInStockError(false);
										setQuantity("");
										setWarehouse("");
									}}
								>
									<div className="circle-inner"></div>
									<span>In Stock</span>
								</div>

								<div
									className={`status-circle ${
										inStock === "Out of Stock" ? "active" : "inactive"
									}`}
									onClick={() => {
										setInStock("Out of Stock");
										setInStockError(false);
										setQuantity("");
										setWarehouse("");
									}}
								>
									<div className="circle-inner"></div>
									<span>Out of Stock</span>
								</div>

								{inStockError && (
									<p className="error-message">
										<svg
											className="error-svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
												fill="#C94515"
											/>
										</svg>
										This field is required
									</p>
								)}
							</div>
							<div className="inventory__info-wrapper">
								<label className="inventory__label">Quantity</label>
								<input
									type="number"
									name="quantity"
									placeholder="Quantity"
									value={quantity}
									className={`inventory__input ${quantityError ? "error" : ""}`}
									onChange={(e) => {
										setQuantity(e.target.value);
										setQuantityError(false);
									}}
								/>
								{quantityError && (
									<p className="error-message">
										<svg
											className="error-svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
												fill="#C94515"
											/>
										</svg>
										This field is required
									</p>
								)}
							</div>

							<div className="inventory__info-wrapper">
								<label className="inventory__label">Warehouse</label>
								<select
									value={warehouse}
									onChange={(e) => {
										setWarehouse(e.target.value);
										setWarehouseError(false);
									}}
									className={`inventory__input ${
										warehouseError ? "error" : ""
									}`}
								>
									<option value="">Select Warehouse</option>
									{warehouses && warehouses.length > 0 ? (
										warehouses.map((wh) => (
											<option key={wh.id} value={wh.id}>
												{wh.name}
											</option>
										))
									) : (
										<option value="">No warehouses available</option>
									)}
								</select>
								{warehouseError && (
									<p className="error-message">
										<svg
											className="error-svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
												fill="#C94515"
											/>
										</svg>
										This field is required
									</p>
								)}
							</div>
						</div>
					</div>

					<div className="buttons">
						<button className="buttons__button cancel">Cancel</button>
						<button type="submit" className="buttons__button add-inventory">
							+ Add Item
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

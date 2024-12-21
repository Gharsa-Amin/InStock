import { useState, useEffect } from "react";
import "./EditInventory.scss";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function EditInventory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inventoryName, setInventoryName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(true);
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [warehouses, setWarehouses] = useState([]);

  const [inventoryNameError, setInventoryNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [warehouseError, setWarehouseError] = useState(false);

  useEffect(() => {
    const fetchInventoryItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/inventories/${id}`
        );
        const item = response.data[0];

        setInventoryName(item.item_name);
        setDescription(item.description);
        setCategory(item.category);
        setInStock(item.status === "In Stock");
        setQuantity(item.quantity);
        setWarehouse(item.warehouse_name.toString());
      } catch (error) {
        console.error("Failed to fetch inventory item", error);
      }
    };

    fetchInventoryItem();
  }, [id]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/warehouses"
        );
        setWarehouses(response.data);
      } catch (error) {
        console.error("Failed to fetch warehouses", error);
      }
    };

    fetchWarehouses();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setInventoryNameError(!inventoryName);
    setDescriptionError(!description);
    setCategoryError(!category);
    setQuantityError(inStock && !quantity);
    setWarehouseError(!warehouse);

    if (
      !inventoryName ||
      !description ||
      !category ||
      (inStock && !quantity) ||
      !warehouse
    ) {
      return;
    }

    const updatedInventory = {
      warehouse_id: warehouses.find((wh) => wh.warehouse_name === warehouse)
        ?.id,

      item_name: inventoryName,
      description: description,
      category: category,
      status: inStock ? "In Stock" : "Out of Stock",
      quantity: inStock ? parseInt(quantity) : 0,
    };

    try {
      await axios.put(
        `http://localhost:8080/api/inventories/${id}`,
        updatedInventory
      );

      navigate(`/warehouses/${updatedInventory.warehouse_id}`);
    } catch (error) {
      console.error("Failed to update inventory", error);
    }
  };

  return (
    <div className="inventory-edit">
      <div className="inventory-edit__container">
        <div className="inventory-edit__header">
          <h1 className="inventory-edit__title">
            <Link to="/inventory" className="inventory-edit__back-link">
              <svg
                className="inventory-edit__back-icon"
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
            </Link>
            Edit Inventory Item
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="inventory-edit__form">
          <div className="inventory-edit__form-container">
            <section className="inventory-edit__section inventory-edit__section--details">
              <h2 className="inventory-edit__section-title">Item Details</h2>

              <div className="inventory-edit__field">
                <label className="inventory-edit__label">Item Name</label>
                <input
                  type="text"
                  value={inventoryName}
                  className={`inventory-edit__input ${
                    inventoryNameError ? "inventory-edit__input--error" : ""
                  }`}
                  onChange={(e) => {
                    setInventoryName(e.target.value);
                    setInventoryNameError(false);
                  }}
                />
                {inventoryNameError && (
                  <p className="inventory-edit__error">
                    This field is required
                  </p>
                )}
              </div>

              <div className="inventory-edit__field">
                <label className="inventory-edit__label">Description</label>
                <textarea
                  value={description}
                  className={`inventory-edit__textarea ${
                    descriptionError ? "inventory-edit__textarea--error" : ""
                  }`}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    setDescriptionError(false);
                  }}
                />
                {descriptionError && (
                  <p className="inventory-edit__error">
                    This field is required
                  </p>
                )}
              </div>

              <div className="inventory-edit__field">
                <label className="inventory-edit__label">Category</label>
                <select
                  value={category}
                  className={`inventory-edit__select ${
                    categoryError ? "inventory-edit__select--error" : ""
                  }`}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setCategoryError(false);
                  }}
                >
                  <option value="">Please select</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Gear">Gear</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Health">Health</option>
                </select>
                {categoryError && (
                  <p className="inventory-edit__error">
                    This field is required
                  </p>
                )}
              </div>
            </section>

            <section className="inventory-edit__section inventory-edit__section--availability">
              <h2 className="inventory-edit__section-title">
                Item Availability
              </h2>

              <div className="inventory-edit__field">
                <label className="inventory-edit__label">Status</label>
                <div className="inventory-edit__radio-group">
                  <label className="inventory-edit__radio-label">
                    <input
                      type="radio"
                      className="inventory-edit__radio"
                      checked={inStock}
                      onChange={() => {
                        setInStock(true);
                        setQuantity("");
                      }}
                    />
                    In stock
                  </label>
                  <label className="inventory-edit__radio-label">
                    <input
                      type="radio"
                      className="inventory-edit__radio"
                      checked={!inStock}
                      onChange={() => {
                        setInStock(false);
                        setQuantity("");
                      }}
                    />
                    Out of stock
                  </label>
                </div>
              </div>

              {inStock && (
                <div className="inventory-edit__field">
                  <label className="inventory-edit__label">Quantity</label>
                  <input
                    type="number"
                    value={quantity}
                    className={`inventory-edit__input ${
                      quantityError ? "inventory-edit__input--error" : ""
                    }`}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                      setQuantityError(false);
                    }}
                  />
                  {quantityError && (
                    <p className="inventory-edit__error">
                      This field is required
                    </p>
                  )}
                </div>
              )}

              <div className="inventory-edit__field">
                <label className="inventory-edit__label">Warehouse</label>
                <select
                  value={warehouse}
                  className={`inventory-edit__select ${
                    warehouseError ? "inventory-edit__select--error" : ""
                  }`}
                  onChange={(e) => {
                    setWarehouse(e.target.value);
                    setWarehouseError(false);
                  }}
                >
                  <option value="">Please select</option>
                  {warehouses.map((wh) => (
                    <option key={wh.id} value={wh.warehouse_name}>
                      {wh.warehouse_name}
                    </option>
                  ))}
                </select>
                {warehouseError && (
                  <p className="inventory-edit__error">
                    This field is required
                  </p>
                )}
              </div>
            </section>
          </div>

          <div className="inventory-edit__actions">
            <Link
              to={`/warehouses/${
                warehouses.find((wh) => wh.warehouse_name === warehouse)?.id
              }`}
              className="inventory-edit__action-link"
            >
              <button
                type="button"
                className="inventory-edit__button inventory-edit__button--cancel"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="inventory-edit__button inventory-edit__button--save"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

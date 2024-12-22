import { useState } from "react";
import "./WarehouseItems.scss";
import SortSVG from "../SortSVG/SortSVG";
import { Link } from "react-router-dom";
import DeleteInventoryItem from "../DeleteInventoryItem/DeleteInventoryItem";
import axios from "axios";

const WarehouseItems = ({ inventoryItem }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleDelete = async (itemId) => {
    try {
      const URL = `http://localhost:8080/api/inventories/${itemId}`;
      await axios.delete(URL);

      setSelectedItem(null);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }
  };

  return (
    <section className="warehouse-item">
      {selectedItem && (
        <DeleteInventoryItem
          item={selectedItem}
          handleClose={closeModal}
          handleDelete={() => handleDelete(selectedItem)}
        />
      )}
      <div className="warehouse-item__section">
        <div className="warehouse-item__flex-left">
          <h4 className="warehouse-item__header">INVENTORY ITEM</h4>

          <Link
            className="warehouse-item__detail warehouse-item__detail--inventory"
            to={`/inventory/${inventoryItem.id}`}
          >
            {inventoryItem.item_name}
            <svg
              width="15"
              height="15"
              viewBox="0 -2 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
                fill="#2E66E6"
              />
            </svg>
          </Link>

          <h4 className="warehouse-item__header">CATEGORY</h4>
          <p className="warehouse-item__detail">{inventoryItem.category}</p>
        </div>

        <div className="warehouse-item__flex-right">
          <h4 className="warehouse-item__header">STATUS</h4>
          <div className="warehouse-item__tag-section">
            <button
              className={`warehouse-item__tag ${
                inventoryItem.status === "In Stock"
                  ? ""
                  : "warehouse-item__tag--false"
              }`}
            >
              {inventoryItem.status}
            </button>
          </div>
          <h4 className="warehouse-item__header">QTY</h4>
          <p className="warehouse-item__detail">{inventoryItem.quantity}</p>
        </div>
      </div>

      <div className="warehouse-item__edit">
        <svg
          onClick={() => openModal(inventoryItem.id)}
          className="warehouse__edit-button--delete"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
            fill="#C94515"
          />
        </svg>

        <Link to={`/inventory/edit/${inventoryItem.id}`}>
          <svg
            className="warehouse__edit-button--edit"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
              fill="#2E66E6"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default WarehouseItems;

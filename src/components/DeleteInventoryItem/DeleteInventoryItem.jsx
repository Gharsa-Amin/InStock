import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DeleteInventoryItem() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    const fetchInventoryItems = async () => {
      const URL = "http://localhost:8080/api/inventories";
      try {
        const response = await axios.get(URL);
        setInventoryItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInventoryItems();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      const URL = `http://localhost:8080/api/warehouses/${itemId}`;
      await axios.delete(URL);

      setInventoryItems(inventoryItems.filter((item) => item.id !== itemId));
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const confirmDelete = (itemId) => {
    setSelectedItemId(itemId);
    setShowModal(true);
  };

  return (
    <section>
      <h1>Inventory</h1>
      <ul>
        {inventoryItems.map((item) => (
          <li key={item.id}>
            <div>{item.item_name}</div>
            <button onClick={() => confirmDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>
              Please confirm that you would like to delete the {selectedItemId}{" "}
              from the list of warehouses. You won't be able to undo this
              action.
            </h2>
            <button onClick={() => handleDelete(selectedItemId)}>
              Yes, delete
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
}

import InventoryHeader from "../InventoryHeader/InventoryHeader";
import InventoryListItem from "../InventoryListItem/InventoryListItem";
import SortSVG from "../SortSVG/SortSVG";
import "./InventoryList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import DeleteInventoryItem from "../DeleteInventoryItem/DeleteInventoryItem";

const InventoryList = () => {
  const [inventories, setInventories] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    const url = "http://localhost:8080/api/inventories";

    async function fetchInventories() {
      try {
        const response = await axios.get(url);
        setInventories(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchInventories();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      const URL = `http://localhost:8080/api/inventories/${itemId}`;
      await axios.delete(URL);

      setInventories((prev) => prev.filter((item) => item.id !== itemId));
      setSelectedItem(null);
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }
  };

  return (
    <section className="inventory-page">
      {selectedItem && (
        <DeleteInventoryItem
          item={selectedItem}
          handleClose={closeModal}
          handleDelete={() => handleDelete(selectedItem.id)}
        />h
      )}
      <InventoryHeader />
      <div className="inventory-nav">
        <h4 className="inventory-nav__header">
          INVENTORY ITEM
          <SortSVG />
        </h4>
        <h4 className="inventory-nav__header">
          CATEGORY
          <SortSVG />
        </h4>
        <div className="inventory-nav__header inventory-nav__header--flex">
          <h4 className="inventory-nav__header">
            STATUS
            <SortSVG />
          </h4>
          <h4 className="inventory-nav__header">
            QTY
            <SortSVG />
          </h4>
          <h4 className="inventory-nav__header">
            WAREHOUSE
            <SortSVG />
          </h4>
        </div>
        <h4 className="inventory-nav__header inventory-nav__header--action ">
          ACTIONS
          <SortSVG />
        </h4>
      </div>
      <section className="inventory">
        {inventories.map((inventoryItem) => {
          return (
            <div className="inventory__item" key={inventoryItem.id}>
              <InventoryListItem
                inventoryItem={inventoryItem}
                openModal={openModal}
              />
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default InventoryList;

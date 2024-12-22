import "./warehouseInventory.scss";
import WarehouseItems from "../WarehouseItems/WarehouseItems";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import SortSVG from "../SortSVG/SortSVG";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const WarehouseInventory = () => {
  const [inventories, setInventories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:8080/api/warehouses/${id}/inventories`;
    async function fetchInventories() {
      try {
        const response = await axios.get(url);
        setInventories(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchInventories();
  }, [id]);

  return (
    <section className="warehouse-inventory">
      <WarehouseDetails />
      <div className="warehouse-nav">
        <h4 className="warehouse-nav__header">
          INVENTORY ITEM
          <SortSVG />
        </h4>
        <h4 className="warehouse-nav__header">
          CATEGORY
          <SortSVG />
        </h4>
        <div className="warehouse-nav__header--flex">
          <h4 className="warehouse-nav__header">
            STATUS
            <SortSVG />
          </h4>
          <h4 className="warehouse-nav__header">
            QTY
            <SortSVG />
          </h4>
        </div>
        <h4 className="warehouse-nav__header warehouse-nav__header--action">
          ACTIONS
          <SortSVG />
        </h4>
      </div>
      <section className="warehouse-stock">
        {inventories.map((inventoryItem) => (
          <div className="inventory__stock-item" key={inventoryItem.id}>
            <WarehouseItems inventoryItem={inventoryItem} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default WarehouseInventory;

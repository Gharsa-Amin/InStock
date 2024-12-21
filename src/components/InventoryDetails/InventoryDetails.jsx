import "./InventoryDetails.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const InventoryDetails = () => {
  const [inventory, setInventory] = useState(null);
  const params = useParams();
  const inventoryId = params.inventoryId;

  useEffect(() => {
    const url = `http://localhost:8080/api/inventories/${inventoryId}`;
    console.log(url);
    const fetchInventoryDetails = async () => {
      try {
        const response = await axios.get(url);
        setInventory(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInventoryDetails();
  }, [inventoryId]);

  if (!inventory) {
    return <>Loading inventory details...</>;
  }

  return (
    <div className="inventory">
      <header className="inventory__header">
        <div className="inventory__small">
          <Link to="/inventory">
            <svg
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
          <h1 className="inventory__title">{inventory.item_name}</h1>
        </div>
        <div className="inventory__edit-button">
          <svg
            className="inventory__edit"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
              fill="white"
            />
          </svg>
          <span className="inventory__edit-text">Edit</span>
        </div>
      </header>

      <section className="inventory__details">
        <div className="inventory__tablet-view">
          <div className="inventory__flex inventory__flex--left">
            <div className="inventory__description">
              <h4 className="inventory__label">ITEM DESCRIPTION:</h4>
              <p className="inventory__text">{inventory.description}</p>
            </div>

            <div className="inventory__information">
              <h4 className="inventory__label">CATEGORY:</h4>
              <p className="inventory__text">{inventory.category}</p>
            </div>
          </div>

          <div className="inventory__flex">
            <div className="inventory__wrapper">
              <div className="inventory__information">
                <h4 className="inventory__label">STATUS:</h4>
                <button
                  className={`inventory__tag ${
                    inventory.status === "In Stock"
                      ? ""
                      : "inventory__tag--false"
                  }`}
                >
                  {inventory.status}
                </button>
              </div>
              <div className="inventory__information">
                <h4 className="inventory__label">QUANTITY:</h4>
                <p className="inventory__text">{inventory.quantity}</p>
              </div>
            </div>

            <div className="inventory__information">
              <h4 className="inventory__label inventory__label--warehouse">
                WAREHOUSE:
              </h4>
              <p className="inventory__text">{inventory.warehouse_name}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryDetails;

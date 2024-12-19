import "./warehouseInventoryList.scss";

const WarehouseInventoryList = () => {
  const inventoryItems = [
    {
      name: "Gym Bag",
      status: "OUT OF STOCK",
      category: "Gear",
      qty: 0,
    },
    {
      name: "Hoodie",
      status: "OUT OF STOCK",
      category: "Apparel",
      qty: 0,
    },
    {
      name: "Keychain",
      status: "IN STOCK",
      category: "Accessories",
      qty: 2000,
    },
    {
      name: "Shampoo",
      status: "IN STOCK",
      category: "Health",
      qty: 4350,
    },
    {
      name: "Phone Charger",
      status: "IN STOCK",
      category: "Electronics",
      qty: 10000,
    },
    {
      name: "Tent",
      status: "IN STOCK",
      category: "Gear",
      qty: 800,
    },
    {
      name: "Winter Jacket",
      status: "OUT OF STOCK",
      category: "Apparel",
      qty: 0,
    },
  ];

  return (
    <div className="warehouse-inventory">
      {inventoryItems.map((item) => (
        <div key={item.name} className="warehouse-inventory__item">
          <div className="warehouse-inventory__section">
            <h3 className="warehouse-inventory__label">INVENTORY ITEM</h3>
            <a href="#" className="warehouse-inventory__link">
              {item.name}
            </a>
          </div>

          <div className="warehouse-inventory__section">
            <h3 className="warehouse-inventory__label">STATUS</h3>
            <span
              className={`warehouse-inventory__status warehouse-inventory__status--${
                item.status === "IN STOCK" ? "in" : "out"
              }`}
            >
              {item.status}
            </span>
          </div>

          <div className="warehouse-inventory__section">
            <h3 className="warehouse-inventory__label">CATEGORY</h3>
            <p className="warehouse-inventory__text">{item.category}</p>
          </div>

          <div className="warehouse-inventory__section">
            <h3 className="warehouse-inventory__label">QTY</h3>
            <p className="warehouse-inventory__text">{item.qty}</p>
          </div>

          <div className="warehouse-inventory__action-buttons">
            <button className="warehouse-inventory__delete">
              <svg
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
            </button>

            <button className="warehouse-inventory__edit">
              <svg
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
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WarehouseInventoryList;

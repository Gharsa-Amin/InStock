import InventoryHeader from "../InventoryHeader/InventoryHeader";
import InventoryListItem from "../InventoryListItem/InventoryListItem";
import "./InventoryList.scss";

const InventoryList = () => {
  const inventoryItems = [
    {
      id: 1,
      warehouse_id: 1,
      item_name: "Television",
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: "Electronics",
      status: "In Stock",
      quantity: 500,
    },
    {
      id: 2,
      warehouse_id: 1,
      item_name: "Gym Bag",
      description:
        "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
      category: "Gear",
      status: "Out of Stock",
      quantity: 0,
    },
    {
      id: 3,
      warehouse_id: 1,
      item_name: "Hoodie",
      description:
        "A simple 100% cotton hoodie, this is an essential piece for any wardrobe.",
      category: "Apparel",
      status: "Out of Stock",
      quantity: 0,
    },
    {
      id: 4,
      warehouse_id: 1,
      item_name: "Keychain",
      description:
        "Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.",
      category: "Accessories",
      status: "In Stock",
      quantity: 2000,
    },
    {
      id: 5,
      warehouse_id: 1,
      item_name: "Shampoo",
      description: "Natural shampoo made from 99% biodegradable ingredients.",
      category: "Health",
      status: "In Stock",
      quantity: 4350,
    },
    {
      id: 6,
      warehouse_id: 1,
      item_name: "Phone Charger",
      description:
        "This USB-C phone charger features fast charging for the latest devices.",
      category: "Electronics",
      status: "In Stock",
      quantity: 10000,
    },
  ];

  return (
    <section className="inventory-page">
      <InventoryHeader />
      <section className="inventory">
        {inventoryItems.map((inventoryItem) => {
          return (
            <div className="inventory__item" key={inventoryItem.id}>
              <InventoryListItem inventoryItem={inventoryItem} />
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default InventoryList;

import InventoryHeader from "../InventoryHeader/InventoryHeader";
import InventoryListItem from "../InventoryListItem/InventoryListItem";

const InventoryList = () => {
  return (
    <section className="inventory-page">
      <InventoryHeader />
      <InventoryListItem />
    </section>
  );
};

export default InventoryList;

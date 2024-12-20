import React from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseListHeader from "../../components/WarehouseListHeader/WarehouseListHeader";

const HomePage = () => {
  return (
    <>
      <WarehouseListHeader />
      <WarehouseList />
    </>
  );
};

export default HomePage;

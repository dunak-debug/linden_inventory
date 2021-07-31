import React from "react";
import DragPreview from "./utils/DragPreview";
import InventoryGrid from "./inventory/InventoryGrid";
import InventoryControl from "./inventory/InventoryControl";
import { selectInventory } from "../store/inventorySlice";
import { useAppSelector } from "../store";

const Inventory: React.FC = () => {
  const [visible, setVisible] = React.useState(true);

  const inventory = useAppSelector(selectInventory);
  return (
    <>
      <DragPreview />
      <div
        className="center-wrapper"
        style={{ visibility: visible ? "visible" : "hidden" }}
      >
        <InventoryGrid inventory={inventory.player} />
        <InventoryControl />
        <InventoryGrid inventory={inventory.right} />
      </div>
    </>
  );
};

export default Inventory;

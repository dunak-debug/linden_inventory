import React from "react";
import DragPreview from "./utils/DragPreview";
import InventoryGrid from "./inventory/InventoryGrid";
import InventoryControl from "./inventory/InventoryControl";

import { debugData } from "../utils/debugData";
import { moveItem, selectInventory  } from "../store/inventorySlice";
import { useAppDispatch, useAppSelector } from "../store";

debugData([
  {
    action: "openinventory",
    data: {
      player: {
        name: "test",
        slots: 10,
        weight: 4,
        maxWeight: 10,
        items: [
          {
            slot: 1,
            name: "water",
            label: "water",
            weight: 10,
            count: 5,
          },
          {
            slot: 2,
            name: "burger",
            label: "test",
            weight: 10,
            count: 5,
          },
        ],
      },
    },
  },
]);

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
        <InventoryGrid inventory={inventory.right} right />
      </div>
    </>
  );
};

export default Inventory;

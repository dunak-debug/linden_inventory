import React from "react";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import { InventoryProps } from "../../typings";
import DragPreview from "../utils/DragPreview";
import InventoryGrid from './InventoryGrid';
import InventoryControl from './InventoryControl';
import { useExitListener } from "../../hooks/useExitListener";

const Inventory: React.FC = () => {
  const [inventory, setInventory] = React.useState<InventoryProps>({
    name: "",
    slots: 0,
    weight: 0,
    maxWeight: 0,
    items: [],
  });

  const [rightInventory, setRightInventory] = React.useState<InventoryProps>({
    name: "",
    type: "drop",
    slots: 0,
    weight: 0,
    maxWeight: 0,
    items: [],
  });

  const [visible, setVisible] = React.useState(false);

  useNuiEvent<{ player: InventoryProps }>("openinventory", (data) => {
    setInventory(data.player);
    setVisible(true);
  });

  useExitListener(setVisible);

  return (
    <>
      <DragPreview />
      <div className="center-wrapper" style={{visibility: visible ? 'visible' : 'hidden'}}>
        <InventoryGrid inventory={inventory} />
        <InventoryControl />
        <InventoryGrid inventory={rightInventory} right />
      </div>
    </>
  );
};

export default Inventory;

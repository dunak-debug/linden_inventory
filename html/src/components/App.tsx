import React, { CSSProperties } from "react";
import InventoryGrid from "./InventoryGrid";
import InventoryControl from "./InventoryControl";
import { Inventory } from "../typings";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { useExitListener } from "../hooks/useExitListener";
import { debugData } from "../utils/debugData";

import { DndProvider, useDragLayer, XYCoord } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import DragPreview from "./DragPreview";

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

const App: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  const [inventory, setInventory] = React.useState<Inventory>({
    name: "",
    slots: 0,
    weight: 0,
    maxWeight: 0,
    items: [],
  });

  const [rightInventory, setRightInventory] = React.useState<Inventory>({
    name: "",
    type: "drop",
    slots: 0,
    weight: 0,
    maxWeight: 0,
    items: [],
  });

  useNuiEvent<{ player: Inventory; right: Inventory | undefined }>(
    "openinventory",
    (data) => {
      setInventory(data.player);
      if (data.right) {
        setRightInventory(data.right);
      } else {
        setRightInventory({
          name: "",
          type: "drop",
          slots: 0,
          weight: 0,
          maxWeight: 0,
          items: [],
        });
      }
      setVisible(true);
    }
  );

  useExitListener(setVisible);

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <DragPreview />
      <div
        className="center-wrapper"
        style={{ visibility: visible ? "visible" : "hidden" }}
      >
        <InventoryGrid inventory={inventory} />
        <InventoryControl />
        <InventoryGrid inventory={rightInventory} right />
      </div>
    </DndProvider>
  );
};

export default App;

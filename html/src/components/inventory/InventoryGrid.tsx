import React from "react";
import { InventoryProps } from "../../typings";
import InventorySlot from "./InventorySlot";

interface InventoryGridProps {
  inventory: InventoryProps;
  right?: boolean;
}

const InventoryGrid: React.FC<InventoryGridProps> = (props) => {
  return (
    <div className="column-wrapper">
      <div className="row-wrapper" style={{ justifyContent: "space-between" }}>
        <p>
          {props.inventory.name} -{" "}
          {props.inventory.type && props.inventory.type}
        </p>
        {props.inventory.weight && (
          <p>
            {props.inventory.weight}/{props.inventory.maxWeight}kg
          </p>
        )}
      </div>
      <div className={props.right ? "inventory-grid-right" : "inventory-grid"}>
        {props.inventory.items.map(
          (item, index) => item && <InventorySlot item={item} key={item.name} />
        )}
      </div>
    </div>
  );
};

export default InventoryGrid;

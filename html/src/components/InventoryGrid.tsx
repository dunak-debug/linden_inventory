import React from "react";
import { Inventory } from "../typings";
import InventorySlot from "./InventorySlot";
import WeightBar from "./WeightBar";

interface InventoryGridProps {
  inventory: Inventory;
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
      {props.inventory.weight && props.inventory.maxWeight && (
        <div className="row-wrapper">
          <WeightBar
            percentage={(props.inventory.weight / props.inventory.maxWeight) * 100}
          />
        </div>
      )}
      <div className={props.right ? "inventory-grid-right" : "inventory-grid"}>
        {props.inventory.items.map(
          (item, index) => item && <InventorySlot item={item} key={item.name} />
        )}
      </div>
    </div>
  );
};

export default InventoryGrid;

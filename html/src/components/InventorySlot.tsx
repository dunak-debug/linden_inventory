import React, { CSSProperties } from "react";
import { DropTypes, Item } from "../typings";
import {
  DragPreviewImage,
  useDrag,
  useDragLayer,
  useDrop,
  XYCoord,
} from "react-dnd";
import WeightBar from "./WeightBar";

interface SlotProps {
  item: Item;
}

const InventorySlot: React.FC<SlotProps> = (props) => {
  const [{ opacity }, drag] = useDrag(() => ({
    item: props.item,
    type: DropTypes.SLOT,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DropTypes.SLOT,
    drop: (item: Item) =>
      console.log("dropped slot item: " + item.name + " " + item.count + "x"),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const attachRef = (element: HTMLDivElement) => {
    drag(element);
    drop(element);
  };

  return (
    <>
      <div
        ref={attachRef}
        className="item-container"
        style={{ opacity, border: isOver ? "5px solid white" : 0 }}
      >
        <div className="item-count">
          {props.item.weight}g {props.item.count}x
        </div>
        <WeightBar percentage={10} />
        <img
          src={`https://github.com/thelindat/linden_inventory/raw/main/html/images/${props.item.name}.png`}
        />
        <div className="item-label">
          {props.item.label} [{props.item.slot}]
        </div>
      </div>
    </>
  );
};

export default InventorySlot;

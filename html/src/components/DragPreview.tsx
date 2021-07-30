import React from "react";
import { useDragLayer, XYCoord } from "react-dnd";
import { Item } from "../typings";

interface DragLayerProps {
  item: Item;
  currentOffset: XYCoord | null;
  isDragging: boolean;
}

const DragPreview: React.FC = () => {
  const { item, isDragging, currentOffset } = useDragLayer<DragLayerProps>(
    (monitor) => ({
      item: monitor.getItem(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    })
  );
  return (
    <>
      {isDragging && currentOffset && (
        <div
          style={{
            position: "fixed",
            pointerEvents: 'none',
            zIndex: 1,
            left: currentOffset.x,
            top: currentOffset.y,
          }}
        >
          <img
            src={`https://github.com/thelindat/linden_inventory/raw/main/html/images/${item.name}.png`}
          />
        </div>
      )}
    </>
  );
};

export default DragPreview;

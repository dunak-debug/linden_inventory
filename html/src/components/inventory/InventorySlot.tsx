import React from "react";
import { DragTypes, ItemProps } from "../../typings";
import { useDrag, useDrop } from "react-dnd";
import { useAppDispatch } from "../../store";
import { moveItem } from "../../store/inventorySlice";

interface SlotProps {
  item?: ItemProps;
}

const InventorySlot: React.FC<SlotProps> = (props) => {
  const dispatch = useAppDispatch();

  const [{ opacity }, drag] = useDrag(() => ({
    item: props.item,
    type: DragTypes.SLOT,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
    canDrag: () => {
      return props.item !== undefined;
    },
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DragTypes.SLOT,
    drop: (item: ItemProps) =>
      dispatch(
        moveItem({
          fromSlot: item.slot,
          toSlot: 1,
        })
      ),
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
        {props.item && (
          <>
            <div className="item-count">
              {props.item.weight}g {props.item.count}x
            </div>
            <img
              src={process.env.PUBLIC_URL + `/images/${props.item.name}.png`}
            />
            <div className="item-label">
              {props.item.label} [{props.item.slot}]
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default InventorySlot;

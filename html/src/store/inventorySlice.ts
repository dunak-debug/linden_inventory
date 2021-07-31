import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import { InventoryProps, ItemProps } from "../typings";

// Define the initial state using that type
const initialState: { player: InventoryProps; right: InventoryProps } = {
  player: {
    id: "initial state",
    slots: 50,
    weight: 4,
    maxWeight: 10,
    items: new Array(10),
  },
  right: {
    type: "drop",
    id: "initial state right",
    slots: 30,
    items: [
      {
        slot: 1,
        name: "burger",
        label: "burgeer",
        weight: 10,
        count: 5,
      },
    ],
  },
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    moveItem: (
      state,
      action: PayloadAction<{
        fromSlot: number;
        toSlot: number;
        fromInventory: Pick<InventoryProps, "id" | "type">;
        toInventory: Pick<InventoryProps, "id" | "type">;
      }>
    ) => {
      console.log(action.payload);
      if (action.payload.fromInventory.type) {
        let item = state.right.items[action.payload.fromSlot - 1];
        item.slot = action.payload.toSlot;

        if (action.payload.fromInventory.id === action.payload.toInventory.id) {
          state.right.items[action.payload.toSlot - 1] = item;
        } else {
          state.player.items[action.payload.toSlot - 1] = item;
        }

        state.right.items[action.payload.fromSlot - 1] = {
          slot: action.payload.fromSlot,
        };
      } else {
        let item = state.player.items[action.payload.fromSlot - 1];
        item.slot = action.payload.toSlot;

        if (action.payload.fromInventory.id === action.payload.toInventory.id) {
          state.player.items[action.payload.toSlot - 1] = item;
        } else {
          state.right.items[action.payload.toSlot - 1] = item;
        }

        state.player.items[action.payload.fromSlot - 1] = {
          slot: action.payload.fromSlot,
        };
      }
    },
  },
});

export const { moveItem } = inventorySlice.actions;
export const selectInventory = (state: RootState) => state.inventory;

export default inventorySlice.reducer;

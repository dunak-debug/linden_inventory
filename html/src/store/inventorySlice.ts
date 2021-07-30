import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import { InventoryProps } from "../typings";

// Define the initial state using that type
const initialState: { player: InventoryProps; right: InventoryProps } = {
  player: {
    name: "initial state",
    slots: 20,
    weight: 4,
    maxWeight: 10,
    items: new Array(10),
  },
  right: {
    name: "initial state right",
    slots: 30,
    weight: 4,
    maxWeight: 10,
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
      }>
    ) => {
      state.player.items[action.payload.toSlot - 1] =
        state.right.items[action.payload.fromSlot - 1];
    },
  },
});

export const { moveItem } = inventorySlice.actions;
export const selectInventory = (state: RootState) => state.inventory;

export default inventorySlice.reducer;

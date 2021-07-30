export interface Item {
  slot: number;
  name: string;
  label: string;
  count: number;
  weight: number;
  metadata?: any;
}

export interface Inventory {
  name: string | number;
  slots: number;
  weight?: number;
  maxWeight?: number;
  items: Item[];
  type?: string;
}

export const DropTypes = {
  SLOT: 'slot',
}

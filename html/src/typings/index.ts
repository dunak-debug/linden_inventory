export interface ItemProps {
  slot: number;
  name: string;
  label: string;
  count: number;
  weight: number;
  metadata?: any;
}

export interface InventoryProps {
  name: string | number;
  slots: number;
  weight?: number;
  maxWeight?: number;
  items: ItemProps[];
  type?: string;
}

export const DragTypes = {
  SLOT: 'slot',
}

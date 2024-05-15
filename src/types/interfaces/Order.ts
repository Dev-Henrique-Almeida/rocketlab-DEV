import { Product } from "./Product";

export interface OrderItem extends Product {
  quantity: number;
}

export interface Order {
  date: string;
  items: OrderItem[];
  total: number;
}

export interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
}

export interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: { name: string; quantity: number; price: number }[];
}

export interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

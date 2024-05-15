import { Order } from "./OrderInterface";

export interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
}

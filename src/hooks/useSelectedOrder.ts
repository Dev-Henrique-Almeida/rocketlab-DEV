import { useState } from "react";
import { Order } from "../types/interfaces/Order";

export const useSelectedOrder = () => {
  const [isSelectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return { isSelectedOrder, setSelectedOrder };
};

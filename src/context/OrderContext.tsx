import React, { createContext, useContext, useState } from "react";
import { OrderContextType } from "../types/OrderContextInterface";
import { Order } from "../types/OrderInterface";

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};

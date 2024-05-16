import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Order } from "../types/interfaces/Order";

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const persistedOrders = localStorage.getItem("orders");
    return persistedOrders ? JSON.parse(persistedOrders) : [];
  });

  const addOrder = (order: Order) => {
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, order];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      return updatedOrders;
    });
  };

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

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

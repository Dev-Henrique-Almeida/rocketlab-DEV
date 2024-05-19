import { useState } from "react";

export const useOrderItems = () => {
  const [isOrderItems, setOrderItems] = useState<
    { name: string; quantity: number; price: number }[]
  >([]);

  return { isOrderItems, setOrderItems };
};

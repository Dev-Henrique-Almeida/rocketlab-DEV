import { useState } from "react";

export const useSelectedProduct = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  return { selectedProductId, setSelectedProductId };
};

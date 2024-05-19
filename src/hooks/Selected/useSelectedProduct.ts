import { useState } from "react";

export const useSelectedProduct = () => {
  const [isSelectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  return { isSelectedProductId, setSelectedProductId };
};

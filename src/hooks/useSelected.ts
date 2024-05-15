import { useState } from "react";

export const useSelected = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  return { selectedProductId, setSelectedProductId };
};

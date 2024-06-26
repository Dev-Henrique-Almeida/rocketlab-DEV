import React, {
  createContext,
  useContext,
  useReducer,
  PropsWithChildren,
  useEffect,
} from "react";
import { Product } from "../types/interfaces/Product";

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; productId: string }
  | { type: "CLEAR_CART" }
  | { type: "INCREMENT_QUANTITY"; productId: string }
  | { type: "DECREMENT_QUANTITY"; productId: string }
  | { type: "CHECKOUT" };

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.product.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.product, quantity: 1 }],
        };
      }
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.productId),
      };
    }
    case "CLEAR_CART": {
      return { items: [] };
    }
    case "INCREMENT_QUANTITY": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    case "DECREMENT_QUANTITY": {
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    }
    case "CHECKOUT": {
      return { items: [] };
    }
    default: {
      return state;
    }
  }
};

const persistCart = (state: CartState) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

export const CartProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    { items: [] },
    (initialState) => {
      const persistedState = localStorage.getItem("cart");
      return persistedState ? JSON.parse(persistedState) : initialState;
    }
  );

  useEffect(() => {
    persistCart(state);
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

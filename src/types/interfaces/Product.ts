export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

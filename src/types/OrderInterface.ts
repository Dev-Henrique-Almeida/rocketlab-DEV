export interface Order {
  items: { name: string; quantity: number; price: number }[];
  total: number;
  date: string;
}

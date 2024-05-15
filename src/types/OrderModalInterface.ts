export interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: { name: string; quantity: number; price: number }[];
}

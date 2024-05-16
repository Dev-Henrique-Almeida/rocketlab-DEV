export interface CartConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export interface StockLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

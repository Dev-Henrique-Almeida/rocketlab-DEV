import React from "react";
import { RemoveModalProps } from "../../types/interfaces/RemoveModal";

const Modal: React.FC<RemoveModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600  bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-600 p-4 rounded shadow-lg max-w-lg w-full sm:w-3/4 md:w-1/2">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-y-2 sm:space-y-0 sm:space-x-2 flex-col sm:flex-row">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded w-full sm:w-auto"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded w-full sm:w-auto"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// components/contract-modal.tsx
import { useEffect, ReactNode } from "react";

interface ContractModalProps {
  open: boolean;
  onClose: () => void;
  data: ReactNode; // HTML yerine React bileşeni (JSX) olarak içerik
}

const ContractModal = ({ open, onClose, data }: ContractModalProps) => {
  useEffect(() => {
    // Açılış/kapanış sırasında ekstra işlem gerekiyorsa buraya eklenebilir
  }, [open]);

  return (
    <div>
      {/* Modal */}
      <div
        className={`fixed top-0 right-0 w-5/6 md:w-1/4 h-full bg-white shadow-lg transform transition-transform z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionDuration: "0.3s" }}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Sözleşme</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-64px)] text-sm">
          {data}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default ContractModal;

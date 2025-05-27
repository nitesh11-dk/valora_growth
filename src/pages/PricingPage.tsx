import { useState } from 'react';
import { X } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { PricingItem } from '../types';

const TelegramConfirmModal = ({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center px-4">
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-lg w-full border border-gray-600">
      <h3 className="text-xl font-semibold mb-4">
        Message copied! Paste it in Telegram.
      </h3>
      <pre className="bg-gray-800 p-4 rounded-md whitespace-pre-wrap mb-6 font-mono text-sm text-gray-300">
        {message}
      </pre>
      <div className="flex justify-end gap-4">
        <Button
          onClick={onCancel}
          variant="secondary"
          className="bg-red-700 hover:bg-red-600 text-gray-200"
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="secondary"
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          Confirm & Send
        </Button>
      </div>
    </div>
  </div>
);

const ContactModal = ({
  item,
  onClose,
}: {
  item: PricingItem | null;
  onClose: () => void;
}) => {
  if (!item) return null;

  const messageText = `
📦 Order Details
📊 Category: ${item.category}
📈 Quantity: ${item.quantity}
💰 Price: ₹${item.price}
  `.trim();

  const encodedMessage = encodeURIComponent(messageText);

  const [showTelegramConfirm, setShowTelegramConfirm] = useState(false);

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/919403080787?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const openTelegram = () => {
    // Copy the message before showing confirmation
    navigator.clipboard.writeText(messageText).then(() => {
      setShowTelegramConfirm(true);
    });
  };

  const confirmTelegramSend = () => {
    window.open("https://telegram.me/Velora_Growth", "_blank");
    setShowTelegramConfirm(false);
    onClose();
  };

  const cancelTelegramSend = () => {
    setShowTelegramConfirm(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
        <div className="bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-lg w-full max-w-md relative border border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white"
          >
            <X />
          </button>
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Choose Contact Method
          </h2>
          <p className="mb-6 text-gray-400">
            How would you like to place your order for{" "}
            <span className="font-semibold text-white">
              {item.quantity} {item.category}
            </span>
            ?
          </p>
          <div className="flex gap-4">
            <Button
              onClick={openTelegram}
              variant="secondary"
              className="bg-blue-900 hover:bg-blue-600 text-white w-full flex items-center justify-center gap-2"
            >
              <FaTelegramPlane size={18} /> Telegram
            </Button>
            <Button
              onClick={openWhatsApp}
              variant="secondary"
              className="bg-green-700 hover:bg-green-600 text-white w-full flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={18} /> WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {showTelegramConfirm && (
        <TelegramConfirmModal
          message={messageText}
          onConfirm={confirmTelegramSend}
          onCancel={cancelTelegramSend}
        />
      )}
    </>
  );
};

export default ContactModal;

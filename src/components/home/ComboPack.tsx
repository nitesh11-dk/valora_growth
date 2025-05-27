import { useState } from "react";
import { Button } from "../ui/Button";
import { comboPacks } from "../../constants/index";
import { ComboPack } from "../../types";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

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
      <h3 className="text-xl font-semibold mb-4 ">
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

const ContactMethodModal = ({
  onWhatsApp,
  onTelegram,
  onCancel,
}: {
  message: string;
  onWhatsApp: () => void;
  onTelegram: () => void;
  onCancel: () => void;
}) => (
  <div className="fixed inset-0  bg-gray-800 bg-opacity-60 z-50 flex items-center justify-center px-4">
    <div className=" text-white  bg-gray-800 p-6 rounded-2xl shadow-xl max-w-md w-full border border-gray-500 ">
      <h2 className="text-xl font-semibold mb-4 ">Choose Contact Method</h2>
      <p className="mb-6 text-gray-300">How would you like to place your order?</p>
      <div className="flex gap-4">
        <Button
          onClick={onTelegram}
          variant="secondary"
          className="bg-blue-700 hover:bg-blue-800 text-white w-full flex items-center justify-center gap-2"
        >
          <FaTelegramPlane size={18} /> Telegram
        </Button>
        <Button
          onClick={onWhatsApp}
          variant="secondary"
          className="bg-green-700 hover:bg-green-600 text-white w-full flex items-center justify-center gap-2"
        >
          <FaWhatsapp size={18} /> WhatsApp
        </Button>
      </div>
      <button
        onClick={onCancel}
        className="mt-4 w-full bg-gray-700 hover:bg-gray-600 rounded-md py-2 text-gray-200"
      >
        Cancel
      </button>
    </div>
  </div>
);

export const ComboPackSection = () => {
  const [selectedPack, setSelectedPack] = useState<ComboPack | null>(null);
  const [showContactMethod, setShowContactMethod] = useState(false);
  const [showTelegramConfirm, setShowTelegramConfirm] = useState(false);

  if (!selectedPack) {
    return (
      <section className="py-16  text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 ">🔥 Combo Packs</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Get more value with our specially curated Instagram growth combos.
          </p>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {comboPacks.map((pack, index) => (
    <div
      key={index}
      className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 text-left flex flex-col justify-between backdrop-blur-sm shadow-lg hover:shadow-gray-500/40 transition-shadow"
    >
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-200">
          {pack.title.join(" + ")}
        </h3>
        <ul className="text-md text-gray-300 mb-5 space-y-1">
          {pack.prices.map((price, i) => (
            <li key={i}>
              {pack.title[i]} — <span className="text-gray-200 text-xl">₹{price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-sm text-red-500 mb-1">
          <span className="line-through text-xl">₹{pack.total}</span>
        </p>
        <p className="text-2xl font-bold text-white mb-4">
          ₹{pack.actualPrice}
        </p>
        <Button
          size="sm"
          variant="secondary"
          className="w-full bg-green-600 py-3 hover:bg-green-500 text-md text-white"
          onClick={() => {
            setSelectedPack(pack);
            setShowContactMethod(true);
          }}
        >
          Buy Now
        </Button>
      </div>
    </div>
  ))}
</div>


        </div>
      </section>
    );
  }

  const message = `
Order Details - Combo Pack
Items: ${selectedPack.title.join(" + ")}
Prices: ${selectedPack.prices
    .map((p, i) => `${selectedPack.title[i]}: ₹${p}`)
    .join(", ")}
Total Price: ₹${selectedPack.total}
Discounted Price: ₹${selectedPack.actualPrice}
`.trim();

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "919403080787";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const handleWhatsApp = () => {
    window.open(whatsappUrl, "_blank");
    setShowContactMethod(false);
    setSelectedPack(null);
  };

  const handleTelegram = () => {
    setShowTelegramConfirm(true);
    setShowContactMethod(false);
  };

  const confirmTelegramSend = () => {
    navigator.clipboard.writeText(message);
    window.open("https://telegram.me/Velora_Growth", "_blank");
    setShowTelegramConfirm(false);
    setSelectedPack(null);
  };

  const cancelTelegramSend = () => {
    setShowTelegramConfirm(false);
    setSelectedPack(null);
  };

  const cancelContactMethod = () => {
    setShowContactMethod(false);
    setSelectedPack(null);
  };

  return (
    <>
      {/* Contact Method Modal */}
      {showContactMethod && (
        <ContactMethodModal
          message={message}
          onWhatsApp={handleWhatsApp}
          onTelegram={handleTelegram}
          onCancel={cancelContactMethod}
        />
      )}

      {/* Telegram Confirm Modal */}
      {showTelegramConfirm && (
        <TelegramConfirmModal
          message={message}
          onConfirm={confirmTelegramSend}
          onCancel={cancelTelegramSend}
        />
      )}
    </>
  );
};

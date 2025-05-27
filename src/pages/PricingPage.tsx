import { useState } from 'react';
import { ShoppingBag, Zap, X } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { pricingItems, categories } from '../constants/index';
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
    setShowTelegramConfirm(true);
  };

  const confirmTelegramSend = () => {
    navigator.clipboard.writeText(messageText);
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
              variant='secondary'
              className="bg-blue-900 hover:bg-blue-600 text-white w-full flex items-center justify-center gap-2"
            >
              <FaTelegramPlane size={18} /> Telegram
            </Button>
            <Button
                          variant='secondary'
              onClick={openWhatsApp}
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


const getCategoryStyles = (category: string) => {
  switch (category) {
   case 'Followers':
  return {
    button: 'bg-red-400 hover:bg-red-500 text-white',
    card: 'bg-red-100/5 border border-red-300',
    title: 'text-red-200',
    price: 'text-red-300'
  };
    case 'Likes':
      return {
        button: 'bg-pink-400 hover:bg-pink-500 text-white',
        card: 'bg-pink-100/5 border border-pink-300',
        title: 'text-pink-200',
        price: 'text-pink-300'
      };
    case 'Views':
      return {
        button: 'bg-sky-500 hover:bg-sky-600 text-white',
        card: 'bg-sky-100/5 border border-sky-400',
        title: 'text-sky-200',
        price: 'text-sky-300'
      };
    default:
      return {
        button: 'bg-gray-700 hogreeng-gray-600 text-white',
        card: 'border border-gray-600',
        title: 'text-white',
        price: 'text-white'
      };
  }
};


export const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PricingItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? pricingItems
    : pricingItems.filter(item => item.category === activeCategory);

  return (
    <div id="#pricing" className="py-16 px-4 md:px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10  text-sm font-medium mb-4">
          <ShoppingBag size={18} className="mr-2" />
          Our Packages
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Instagram Growth Pricing
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose from our wide range of Instagram growth services tailored to boost your social media presence.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-gray-400 text-white shadow-md shadow-purple-500/20'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredItems.map((item, index) => {
          const styles = getCategoryStyles(item.category);

          return (
            <Card key={index} className={`relative overflow-hidden ${styles.card}`}>
              <CardHeader>
                <CardTitle className={`text-xl font-semibold ${styles.title}`}>
                  {item.quantity.toLocaleString()} {item.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Get {item.quantity.toLocaleString()} {item.category.toLowerCase()} delivered fast and securely.
                </p>
                <div className="flex items-baseline mt-4">
                  <span className={`text-3xl font-bold ${styles.price}`}>₹{item.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  fullWidth
                          className={`group ${styles.button } w-fit bg-green-700 py-2s hover:bg-green-500 text-sm text-white`}
                  variant='secondary'
                  onClick={() => setSelectedItem(item)}
                >
                  <Zap size={18} className="mr-2 group-hover:animate-pulse" />
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Modal */}
      {selectedItem && (
        <ContactModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

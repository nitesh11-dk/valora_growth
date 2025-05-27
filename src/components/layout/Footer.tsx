import { Instagram, } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-gray-900 ">
      <div className="container mx-auto px-4 md:px-6 py-6">
        
        <div className="  flex gap-y-4  flex-col sm:flex-row sm:px-20 text-center md:flex md:justify-between md:text-left">
          <div className="flex items-center justify-center space-x-4">
              <a 
                href="https://www.instagram.com/velora.growth?igsh=NDA2MmZ0ZWEydnox" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://discord.gg/cChzQXjK" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors"
                aria-label="Twitter"
              >
                <FaDiscord />
              </a>
              <a 
                href="https://telegram.me/Velora_Growth" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors"
                aria-label="Facebook"
              >
               <FaTelegram />
              </a>
            </div>
          <p className="text-gray-500  md:mb-0">
            &copy; {new Date().getFullYear()} ValoraGrowth. All rights reserved.
          </p>
          <div className="space-x-4">
            <Link to="/terms" className="text-gray-500 hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund" className="text-gray-500 hover:text-purple-400 transition-colors">
              Refund Policy
            </Link>
          </div>
              
        </div>
      </div>
    </footer>
  );
};
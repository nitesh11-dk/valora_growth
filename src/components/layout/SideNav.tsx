import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NavItem } from '../../types';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

interface SideNavProps {
  items: NavItem[];
}

export const SideNav = ({ items }: SideNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleNav = () => setIsOpen(!isOpen);
  
  return (
    <>
      {/* Mobile Nav Trigger */}
      <button
        onClick={toggleNav}
        className="lg:hidden fixed z-50 top-4 left-4 p-2 rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition-colors"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          onClick={toggleNav}
        />
      )}
      
      {/* Side Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full  border-r border-gray-800 shadow-xl transition-transform duration-300 ease-in-out z-50 
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
          w-64 lg:w-72 flex flex-col`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23707070' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
        }}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-800 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Valora.Growth Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-white text-2xl font-bold select-none">
              Valora.Growth
            </span>
          </Link>
        </div>
        
        {/* Nav Items */}
        <nav className="p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black">
          <ul className="space-y-1">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-gray-800 text-white shadow-inner'
                        : 'text-gray-300 hover:text-white hover:bg-gray-900'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {Icon && (
                      <Icon
                        size={18}
                        className={isActive ? 'text-white' : 'text-gray-500'}
                      />
                    )}
                    <span>{item.title}</span>
                    
                    {isActive && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-gray-600" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Contact Button */}
        <div className="p-4 border-t border-gray-700 bg-gray-900">
          <a
            href="https://wa.me/919403080787"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              variant='secondary'
              fullWidth
              className="group bg-gray-800 hover:bg-gray-700 text-white transition-transform transform hover:scale-[1.03]"
            >
              <MessageCircle
                size={18}
                className="mr-2 transition-transform group-hover:scale-110 text-white"
              />
              Contact on WhatsApp
            </Button>
          </a>
        </div>
      </aside>
    </>
  );
};

import React from 'react';
import { SideNav } from './SideNav';
import { NavItem } from '../../types';
import { Home, DollarSign, Mail, ShoppingBag, Info } from 'lucide-react';

const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },

  // {
  //   title: 'Services',
  //   href: '/services',
  //   icon: DollarSign,
  // }
];

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 flex">
      <SideNav items={navItems} />
      
     <main className="flex-1 ml-0 lg:ml-72 transition-all duration-300 relative  text-white">
  <div 
    className="absolute inset-0"
    style={{ 
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23707070' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "60px 60px",
    }}
  />
  <div className="relative z-10 min-h-screen px-6 py-8">
    {children}
  </div>
</main>

    </div>
  );
};
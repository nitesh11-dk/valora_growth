import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const Badge = ({ 
  children, 
  color = 'default',
  className 
}: BadgeProps) => {
  const colorStyles = {
    default: 'bg-gray-700 text-gray-200',
    primary: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    success: 'bg-green-500/20 text-green-300 border-green-500/30',
    warning: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    danger: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  };

  return (
    <span
      className={twMerge(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        colorStyles[color],
        className
      )}
    >
      {children}
    </span>
  );
};
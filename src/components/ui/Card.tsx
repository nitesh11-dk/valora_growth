import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = false }: CardProps) => {
  return (
    <div
      className={twMerge(
        'bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl p-6',
        hoverEffect && 'transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/30 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <div className={twMerge('mb-4', className)}>{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return <h3 className={twMerge('text-xl font-bold text-white', className)}>{children}</h3>;
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={twMerge('text-gray-300', className)}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className }: CardFooterProps) => {
  return <div className={twMerge('mt-4 pt-4 border-t border-gray-700', className)}>{children}</div>;
};
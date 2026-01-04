import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-gradient-to-b from-[#121826]/95 to-[#0f1624]/95 border border-white/10 rounded-2xl shadow-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};
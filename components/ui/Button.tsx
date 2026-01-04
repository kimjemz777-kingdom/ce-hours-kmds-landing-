import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'secondary', 
  size = 'md', 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all active:translate-y-[1px] whitespace-nowrap cursor-pointer select-none";
  
  const variants = {
    primary: "border border-sky-300/30 bg-gradient-to-br from-sky-300/20 to-violet-400/20 text-white hover:border-sky-300/50 shadow-[0_12px_30px_rgba(0,0,0,0.35)]",
    secondary: "border border-text/15 bg-text/5 text-text hover:bg-text/10 hover:border-text/20",
    outline: "border border-text/10 bg-transparent text-muted hover:text-text hover:border-text/30"
  };

  const sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, description, children, className = '', action }) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      {(title || description) && (
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {title && <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{title}</h2>}
            {description && <p className="text-muted text-base md:text-lg max-w-prose">{description}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </section>
  );
};
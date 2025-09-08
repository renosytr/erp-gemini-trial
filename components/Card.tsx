
import React from 'react';

interface CardProps {
  title: string;
  value: string;
  change?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, change, icon, children }) => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-text-secondary">{title}</h3>
        {icon}
      </div>
      <div className="mt-4">
        {value && <p className="text-3xl font-bold text-text-primary">{value}</p>}
        {change && <p className="text-sm text-text-secondary mt-1">{change} from last month</p>}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;

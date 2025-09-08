
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ShoppingCartIcon, UsersIcon, CogIcon, SupportIcon } from './Icons';

const Sidebar: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-3 transition-colors duration-200 rounded-lg ${
      isActive
        ? 'bg-primary text-white'
        : 'text-sidebar-text hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <div className="hidden md:flex flex-col w-64 bg-sidebar">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">Gemini ERP</h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4">
          <NavLink to="/dashboard" className={navLinkClasses}>
            <HomeIcon className="h-6 w-6 mr-3" />
            Dashboard
          </NavLink>
          <NavLink to="/orders" className={navLinkClasses}>
            <ShoppingCartIcon className="h-6 w-6 mr-3" />
            Orders
          </NavLink>
          <NavLink to="/customers" className={navLinkClasses}>
            <UsersIcon className="h-6 w-6 mr-3" />
            Customers
          </NavLink>
        </nav>
      </div>
       <div className="px-2 py-4 border-t border-gray-700">
          <a href="#" className="flex items-center px-4 py-3 text-sidebar-text hover:bg-gray-700 hover:text-white rounded-lg">
            <SupportIcon className="h-6 w-6 mr-3" />
            Support
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sidebar-text hover:bg-gray-700 hover:text-white rounded-lg">
            <CogIcon className="h-6 w-6 mr-3" />
            Settings
          </a>
        </div>
    </div>
  );
};

export default Sidebar;

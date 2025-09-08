
import React from 'react';
import { SearchIcon, BellIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-16 bg-card px-6 border-b border-gray-200">
      <div className="flex items-center">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          <BellIcon className="h-6 w-6" />
        </button>
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://picsum.photos/100/100"
            alt="User avatar"
          />
          <div className="ml-3 hidden md:block">
            <p className="text-sm font-medium text-text-primary">Jane Doe</p>
            <p className="text-xs text-text-secondary">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

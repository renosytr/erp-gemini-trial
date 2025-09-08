
import React from 'react';
import Card from './Card';
import SalesChart from './SalesChart';
import RecentOrdersTable from './RecentOrdersTable';
import { ChartBarIcon, CurrencyDollarIcon, ShoppingBagIcon, UsersIcon } from './Icons';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-text-primary mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card title="Total Revenue" value="$405,091.00" change="+20.1%" icon={<CurrencyDollarIcon className="h-8 w-8 text-primary" />} />
        <Card title="Subscriptions" value="+2350" change="+180.1%" icon={<UsersIcon className="h-8 w-8 text-green-500" />} />
        <Card title="Sales" value="+12,234" change="+19%" icon={<ShoppingBagIcon className="h-8 w-8 text-yellow-500" />} />
        <Card title="Active Now" value="+573" change="+201" icon={<ChartBarIcon className="h-8 w-8 text-red-500" />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-text-primary mb-4">Sales Overview</h3>
          <SalesChart />
        </div>
        <div className="lg:col-span-2 bg-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-text-primary mb-4">Recent Orders</h3>
          <RecentOrdersTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

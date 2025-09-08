
import React from 'react';
import type { Order } from '../types';

const orders: Order[] = [
  { id: 'ORD001', customerName: 'Olivia Martin', date: '2023-11-20', amount: 199.99, status: 'Delivered', avatar: 'https://picsum.photos/id/1011/50/50' },
  { id: 'ORD002', customerName: 'Jackson Lee', date: '2023-11-21', amount: 49.50, status: 'Shipped', avatar: 'https://picsum.photos/id/1012/50/50' },
  { id: 'ORD003', customerName: 'Isabella Nguyen', date: '2023-11-22', amount: 350.00, status: 'Pending', avatar: 'https://picsum.photos/id/1013/50/50' },
  { id: 'ORD004', customerName: 'William Kim', date: '2023-11-23', amount: 75.25, status: 'Delivered', avatar: 'https://picsum.photos/id/1014/50/50' },
  { id: 'ORD005', customerName: 'Sophia Davis', date: '2023-11-24', amount: 120.00, status: 'Cancelled', avatar: 'https://picsum.photos/id/1015/50/50' },
];

const getStatusClass = (status: Order['status']) => {
  switch (status) {
    case 'Delivered': return 'bg-green-100 text-green-800';
    case 'Shipped': return 'bg-blue-100 text-blue-800';
    case 'Pending': return 'bg-yellow-100 text-yellow-800';
    case 'Cancelled': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const RecentOrdersTable: React.FC = () => {
  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200">
        {orders.map((order) => (
          <li key={order.id} className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={order.avatar} alt={`${order.customerName} avatar`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-primary truncate">{order.customerName}</p>
                <p className="text-sm text-text-secondary truncate">{order.id}</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-text-primary">
                ${order.amount.toFixed(2)}
              </div>
            </div>
             <div className="mt-2 text-right">
                <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
             </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrdersTable;

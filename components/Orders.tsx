
import React from 'react';
import Card from './Card';

const Orders: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-text-primary mb-6">Orders</h2>
      <Card title="Manage Orders" value="">
        <p className="text-text-secondary">This is where the order management interface would be. You can view, edit, and track all customer orders from here. Features would include filtering, searching, and bulk actions.</p>
      </Card>
    </div>
  );
};

export default Orders;

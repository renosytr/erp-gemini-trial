
import React from 'react';
import Card from './Card';

const Customers: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-text-primary mb-6">Customers</h2>
      <Card title="Manage Customers" value="">
        <p className="text-text-secondary">This section would contain the customer relationship management (CRM) features. You could view customer history, manage contact information, and analyze customer behavior.</p>
      </Card>
    </div>
  );
};

export default Customers;

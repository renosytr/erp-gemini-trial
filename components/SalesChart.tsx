
import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import type { SalesData } from '../types';

const data: SalesData[] = [
  { name: 'Jan', revenue: 4000, profit: 2400 },
  { name: 'Feb', revenue: 3000, profit: 1398 },
  { name: 'Mar', revenue: 5000, profit: 9800 },
  { name: 'Apr', revenue: 4780, profit: 3908 },
  { name: 'May', revenue: 5890, profit: 4800 },
  { name: 'Jun', revenue: 4390, profit: 3800 },
  { name: 'Jul', revenue: 5490, profit: 4300 },
];

const SalesChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;

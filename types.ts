
export interface Order {
  id: string;
  customerName: string;
  date: string;
  amount: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  avatar: string;
}

export interface SalesData {
  name: string;
  revenue: number;
  profit: number;
}

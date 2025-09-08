
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Customers from './components/Customers';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex h-screen bg-background font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-4 md:p-6 lg:p-8">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </main>
        </div>
        <AiAssistant />
      </div>
    </HashRouter>
  );
};

export default App;

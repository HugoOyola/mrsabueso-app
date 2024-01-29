// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Total Sales</h3>
          <p className="text-gray-700">$50,000</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Products</h3>
          <p className="text-gray-700">150</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

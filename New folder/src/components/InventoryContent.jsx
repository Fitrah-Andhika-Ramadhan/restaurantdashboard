import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const InventoryContent = () => {
  // Dummy inventory data
  const initialInventoryData = [
    { name: 'Product A', quantity: 50, price: 100, status: 'In Stock', date: '2024-01-01' },
    { name: 'Product B', quantity: 30, price: 200, status: 'Low Stock', date: '2024-02-01' },
    { name: 'Product C', quantity: 20, price: 150, status: 'In Stock', date: '2024-03-01' },
    { name: 'Product D', quantity: 40, price: 120, status: 'Out of Stock', date: '2024-04-01' },
    { name: 'Product E', quantity: 60, price: 180, status: 'In Stock', date: '2024-05-01' },
    { name: 'Product F', quantity: 10, price: 250, status: 'Low Stock', date: '2024-06-01' },
  ];

  const [inventoryData, setInventoryData] = useState(initialInventoryData);

  // Simulate adding new products
  const loadMoreInventoryData = () => {
    const newInventoryData = [
      { name: 'Product G', quantity: 80, price: 130, status: 'In Stock', date: '2024-07-01' },
      { name: 'Product H', quantity: 10, price: 220, status: 'Out of Stock', date: '2024-08-01' },
      { name: 'Product I', quantity: 25, price: 160, status: 'In Stock', date: '2024-09-01' },
    ];
    setInventoryData((prevData) => [...prevData, ...newInventoryData]);
  };

  // Prepare data for the chart (quantity over time)
  const chartData = inventoryData.map((item) => ({
    name: item.date,
    quantity: item.quantity,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Inventory Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Inventory Quantity Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="quantity" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Inventory Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-left">Quantity</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.quantity}</td>
                  <td className="p-2">Rp {item.price.toLocaleString()}</td>
                  <td
                    className={`p-2 ${item.status === 'In Stock' ? 'text-green-600' : item.status === 'Low Stock' ? 'text-yellow-600' : 'text-red-600'}`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Button to simulate loading more data */}
        <button
          onClick={loadMoreInventoryData}
          className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg"
        >
          Load More Inventory
        </button>
      </div>
    </div>
  );
};

export default InventoryContent;

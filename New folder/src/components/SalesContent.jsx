import React from 'react'; 
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';

const SalesContent = ({ salesData }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Monthly Revenue & Profit</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Monthly Performance</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Month</th>
              <th className="p-2 text-left">Revenue</th>
              <th className="p-2 text-left">Cost</th>
              <th className="p-2 text-left">Profit</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((data) => (
              <tr key={data.name} className="border-b">
                <td className="p-2">{data.name}</td>
                <td className="p-2">Rp {data.revenue.toLocaleString()}</td>
                <td className="p-2">Rp {data.cost.toLocaleString()}</td>
                <td className={`p-2 ${data.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  Rp {data.profit.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default SalesContent;

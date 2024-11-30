import React from 'react';
import { BarChart2, Database, Users } from 'lucide-react';

// Dummy data for each section
const salesData = [
  { month: 'January', revenue: 120000, profit: 40000 },
  { month: 'February', revenue: 150000, profit: 60000 },
  { month: 'March', revenue: 130000, profit: 50000 },
  { month: 'April', revenue: 160000, profit: 70000 },
];

const inventoryData = [
  { item: 'Product A', stock: 100, sold: 50 },
  { item: 'Product B', stock: 200, sold: 150 },
  { item: 'Product C', stock: 300, sold: 250 },
];

const staffScheduleData = [
  { name: 'John Doe', shift: 'Morning', date: '2024-12-01' },
  { name: 'Jane Smith', shift: 'Afternoon', date: '2024-12-01' },
  { name: 'Emily Johnson', shift: 'Night', date: '2024-12-01' },
];

const Tabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    { value: 'sales', icon: BarChart2, label: 'Sales' },
    { value: 'inventory', icon: Database, label: 'Inventory' },
    { value: 'staff', icon: Users, label: 'Staff' },
  ];

  return (
    <div className="flex w-full bg-gray-100 rounded-lg p-1 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`flex-1 flex items-center justify-center p-3 rounded-md transition-all duration-200 ${
            selectedTab === tab.value
              ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg transform scale-105'
              : 'text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setSelectedTab(tab.value)}
          aria-selected={selectedTab === tab.value}
          role="tab"
        >
          <tab.icon className="mr-2 h-5 w-5" />
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const Content = ({ selectedTab }) => {
  const contentData = {
    sales: (
      <div>
        <h2>Sales Data</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Month</th>
              <th className="p-2 text-left">Revenue</th>
              <th className="p-2 text-left">Profit</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{data.month}</td>
                <td className="p-2">Rp {data.revenue.toLocaleString()}</td>
                <td className="p-2">Rp {data.profit.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    inventory: (
      <div>
        <h2>Inventory Data</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Item</th>
              <th className="p-2 text-left">Stock</th>
              <th className="p-2 text-left">Sold</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{data.item}</td>
                <td className="p-2">{data.stock}</td>
                <td className="p-2">{data.sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    staff: (
      <div>
        <h2>Staff Schedule</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Shift</th>
              <th className="p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {staffScheduleData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{data.name}</td>
                <td className="p-2">{data.shift}</td>
                <td className="p-2">{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  };

  return contentData[selectedTab] || <div>Select a tab to view content</div>;
};

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState('sales'); // Default tab is 'sales'

  return (
    <div className="p-6">
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Content selectedTab={selectedTab} />
    </div>
  );
};

export default App;

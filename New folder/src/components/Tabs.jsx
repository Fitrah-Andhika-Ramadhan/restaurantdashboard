import React from 'react';
import { BarChart2, Database, Users } from 'lucide-react'; // No need for framer-motion import if not used

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
          aria-selected={selectedTab === tab.value}
          aria-label={`Go to ${tab.label} section`}
          className={`flex-1 flex items-center justify-center p-3 rounded-md transition-colors duration-300 ease-in-out ${
            selectedTab === tab.value
              ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg transform scale-105'
              : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
          }`}
          onClick={() => setSelectedTab(tab.value)}
        >
          <tab.icon className="mr-2 h-5 w-5" />
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

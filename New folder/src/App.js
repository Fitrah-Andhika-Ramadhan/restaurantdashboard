import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import Tabs from './components/Tabs';
import SalesContent from './components/SalesContent';
import InventoryContent from './components/InventoryContent';
import StaffContent from './components/StaffContent';
import { salesData, inventoryData, staffSchedule } from './data/mockData';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('sales');

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        Restaurant Dashboard
      </h1>

      {/* Tab Navigation */}
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* Tab Content with motion animation for smooth transition */}
      <motion.div
        key={selectedTab}  // Trigger animation on tab change
        initial={{ opacity: 0, x: -100 }}  // Start from left
        animate={{ opacity: 1, x: 0 }}    // Slide in from left
        exit={{ opacity: 0, x: 100 }}     // Exit to the right
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}  // Smooth spring effect
      >
        {selectedTab === 'sales' && <SalesContent salesData={salesData} />}
        {selectedTab === 'inventory' && <InventoryContent inventoryData={inventoryData} />}
        {selectedTab === 'staff' && <StaffContent staffSchedule={staffSchedule} />}
      </motion.div>
    </div>
  );
};

export default App;

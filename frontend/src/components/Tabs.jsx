import React from 'react';

export function Tabs({ tabs, selectedTab, onSelectTab }) {
  return (
    <div className="flex">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSelectTab(tab.id)}
          style={{ outline: 'none' }}
          className={`px-4 py-2 bg-whites ${
            selectedTab === tab.id ? 'bg-white text-base' : ' bg-white text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}


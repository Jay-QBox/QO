import React, { useState } from 'react';

export default function OpportunitiesSingle() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedOption, setSelectedOption] = useState(1);
  const [selectedSubTab, setSelectedSubTab] = useState(1);

  const tabs = [
    { id: 1, label: 'Country Level' },
    { id: 2, label: 'State Level' },
    { id: 3, label: 'City Level' },
  ];

  const sidebarOptions = {
    1: [
      { id: 1, label: 'Arogya Vihara – TAM / SAM​' },
      { id: 2, label: 'Arogya Gruham – TAM / SAM' },
      { id: 3, label: 'InstaMed – TAM / SAM' },
    ],
    2: [
      { id: 1, label: 'Arogya Vihara – TAM / SAM​' },
      { id: 2, label: 'Arogya Gruham – TAM / SAM' },
      { id: 3, label: 'InstaMed – TAM / SAM' },
    ],
    3: [
      { id: 1, label: 'Arogya Vihara – TAM / SAM​' },
      { id: 2, label: 'Arogya Gruham – TAM / SAM' },
      { id: 3, label: 'InstaMed – TAM / SAM' },
    ],
  };

  const subTabsContent = {
    1: [
      { id: 1, label: 'SubTab 1', content: 'Content for SubTab 1 under Option 1' },
      { id: 2, label: 'SubTab 2', content: 'Content for SubTab 2 under Option 1' },
    ],
    2: [
      { id: 3, label: 'SubTab A', content: 'Content for SubTab A under Option 2' },
      { id: 4, label: 'SubTab B', content: 'Content for SubTab B under Option 2' },
    ],
  };

  const handleTabSelect = (id) => {
    setSelectedTab(id);
    setSelectedOption(null);
    setSelectedSubTab(null);
  };

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
    setSelectedSubTab(subTabsContent[id][0].id); // Default to first sub-tab in the selected option
  };

  const selectedSidebarOptions = sidebarOptions[selectedTab];
  const selectedSubTabs = selectedOption ? subTabsContent[selectedOption] : [];
  const selectedSubTabContent = selectedSubTab && selectedSubTabs.find((subTab) => subTab.id === selectedSubTab)?.content;

  return (
    <div className="flex">
      <div className="w-64 p-4 bg-gray-100 border-r">
        <h2 className="font-bold text-lg mb-2">Sidebar Options</h2>
        {selectedSidebarOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            className={`block w-full bg-white text-left px-4 py-2 mb-2 ${selectedOption === option.id ? 'bg-white text-base' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="flex-1 p-4">
        <div className="flex mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabSelect(tab.id)}
              className={`px-4 py-2 bg-white ${selectedTab === tab.id ? 'bg-white text-base' : 'text-gray-500 hover:text-gray-500'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {selectedOption && (
          <div className="flex mt-4">
            {selectedSubTabs.map((subTab) => (
              <button
                key={subTab.id}
                onClick={() => setSelectedSubTab(subTab.id)}
                className={`px-3 py-1 bg-white ${selectedSubTab === subTab.id ? 'bg-white text-base' : 'text-gray-500'}`}
              >
                {subTab.label}
              </button>
            ))}
          </div>
        )}
        <div className="mt-4">
          {selectedSubTabContent}
        </div>
      </div>
    </div>
  );
}

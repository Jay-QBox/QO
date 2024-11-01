import React, { useState } from 'react';
import { Tabs } from '../Tabs';
import { SubTabs } from '../SubTabs';
import { MainSideBar } from '../MainSideBar';

export default function Opportunities() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedSubTab, setSelectedSubTab] = useState(1);

  // SIDEBAR - OPTIONS
  const sidebarOptions = [
    { id: 1, label: 'Arogya Vihar' },
    { id: 2, label: 'Arogya Gruham' },
    { id: 3, label: 'InstaMed' },
  ];

  // TABS - OPTIONS relation is INDEX
  const tabsContent = {
    1: [
      { id: 1, label: 'Country Level' },
      { id: 2, label: 'State Level' },
      { id: 3, label: 'City Level' },
    ],
    2: [
      { id: 0, label: 'City Level' },
      { id: 1, label: 'Village Level' },
      { id: 2, label: 'City Level' },

    ],
    3: [
      { id: 0, label: 'City Level' },
      { id: 1, label: 'Village Level' },
      { id: 2, label: 'City Level' },

    ],
  };

  const subTabsContent = {
    1: [
      { id: 1, label: 'SubTab 1', content: 'Content for SubTab 1 under Option 1' },
      { id: 2, label: 'SubTab 2', content: 'Content for SubTab 1 under Option 2' }
    ],
    2: [{ id: 2, label: 'SubTab 2', content: 'Content for SubTab 2 under Option 1' }],
    3: [{ id: 3, label: 'SubTab 3', content: 'Content for SubTab 3 under Option 2' }],
  };

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
    setSelectedTab(tabsContent[id][0].id);
    setSelectedSubTab(null);
  };

  const handleTabSelect = (id) => {
    setSelectedTab(id);
    setSelectedSubTab(subTabsContent[id]?.[0]?.id || null);
  };

  return (
    <div className="flex">
      <MainSideBar
        options={sidebarOptions}
        selectedOption={selectedOption}
        onSelectOption={handleOptionSelect}
      />
      <div className="flex-1 p-4">
        <Tabs tabs={tabsContent[selectedOption] || []} selectedTab={selectedTab} onSelectTab={handleTabSelect} />
        {selectedTab && subTabsContent[selectedTab] && (
          <SubTabs
            subTabs={subTabsContent[selectedTab]}
            selectedSubTab={selectedSubTab}
            onSelectSubTab={setSelectedSubTab}
          />
        )}
        {selectedSubTab && (
          <div className="mt-4">
            {subTabsContent[selectedTab].find((subTab) => subTab.id === selectedSubTab).content}
          </div>
        )}
      </div>
    </div>
  );
}

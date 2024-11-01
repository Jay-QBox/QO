import React, { useState } from "react";
import { Tabs } from "../Tabs";
import { SubTabs } from "../SubTabs";
import { MainSideBar } from "../MainSideBar";
import img from "../../assets/gruha.png";
import CardB from "../CardB";
export default function Strategies() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedOption, setSelectedOption] = useState(1);
  const [selectedSubTab, setSelectedSubTab] = useState(1);

  const tabs = [
    { id: 1, label: "Arogya Vihara" },
    { id: 2, label: "Arogya Guhara" },
    { id: 3, label: "Insta Med" },
  ];
  const sidebarOptions = {
    // for two level content prop is not NEEDED

    1: [
      { id: 1, label: "Onboarding Vendor Strategies  & procedures​​" },
      { id: 2, label: "Onboarding Customer Strategies & procedures​" },
      { id: 3, label: "Business Strategies​​" },
      { id: 3, label: "Marketing Strategies​​" },
      { id: 3, label: "Operational Strategies ​" },
      { id: 3, label: "Financial Strategies ​" },
      { id: 3, label: "Technical Strategies ​" },
    ],
    2: [
      { id: 1, label: "Onboarding Vendor Strategies  & procedures​​" },
      { id: 2, label: "Onboarding Customer Strategies & procedures​" },
      { id: 3, label: "Business Strategies​​" },
      { id: 3, label: "Marketing Strategies​​" },
      { id: 3, label: "Operational Strategies ​" },
      { id: 3, label: "Financial Strategies ​" },
      { id: 3, label: "Technical Strategies ​" },
    ],
    3: [
      { id: 1, label: "Onboarding Vendor Strategies  & procedures​​" },
      { id: 2, label: "Onboarding Customer Strategies & procedures​" },
      { id: 3, label: "Business Strategies​​" },
      { id: 3, label: "Marketing Strategies​​" },
      { id: 3, label: "Operational Strategies ​" },
      { id: 3, label: "Financial Strategies ​" },
      { id: 3, label: "Technical Strategies ​" },
    ],
  };

  const hopitalData = [
    {
      id: 0,
      title: "Hospital Title",
      desc: "Desc for Hospital",
      img: img,
      bullets: [
        { id: 1, text: "First bullet point with additional info." },
        { id: 2, text: "Second bullet point with more details." },
        { id: 3, text: "Third bullet point highlights an important fact." },
        { id: 4, text: "Fourth bullet point provides key insights." },
      ],
    },
  ];
  const subTabsContent = {
    1: [
      {
        id: 1,
        label: "Hospital",
        content: hopitalData,
      },
      {
        id: 2,
        label: "Translator ",
        content: "Content for Translator",
      },
      {
        id: 3,
        label: "Agents ",
        content: "Content for Agents",
      },
      {
        id: 4,
        label: "Flights ",
        content: "Content for SubTab 2 under Option 1",
      },
      {
        id: 5,
        label: "Cars ",
        content: "Content for SubTab 2 under Option 1",
      },
      {
        id: 6,
        label: "Hotels ",
        content: "Content for SubTab 2 under Option 1",
      },
      {
        id: 7,
        label: "Food ",
        content: "Content for SubTab 2 under Option 1",
      },
      {
        id: 8,
        label: "Visas ",
        content: "Content for SubTab 2 under Option 1",
      },
      {
        id: 9,
        label: "Authorized Attenders",
        content: "Content for SubTab 2 under Option 1",
      },
    ],
    2: [
      {
        id: 1,
        label: "SubTab A",
        content: "Content for SubTab A under Option 2",
      },
      {
        id: 2,
        label: "SubTab B",
        content: "Content for SubTab B under Option 2",
      },
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

  return (
    <div className="flex">
      <MainSideBar
        options={sidebarOptions[selectedTab]}
        selectedOption={selectedOption}
        onSelectOption={handleOptionSelect}
        heading={sidebarOptions[selectedTab].label}
      />
      <div className="flex-1 p-4">
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={handleTabSelect}
        />
        {/* // for 3 - Level Rendering */}
        {selectedOption && (
          <SubTabs
            subTabs={subTabsContent[selectedOption]}
            selectedSubTab={selectedSubTab}
            onSelectSubTab={setSelectedSubTab}
          />
        )}
        <div className="mt-4">
          {selectedSubTab && (
            <div>
              {subTabsContent[selectedOption]
                .find((subTab) => subTab.id === selectedSubTab)
                .content.map((itm) => (
                  <CardB title={itm.title} imageUrl={itm.img} description={itm.desc} bullet={itm.bullets}/>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
//  const subTabsContent = {
    // 1: [
    //     { id: 1, label: 'SubTab 1', content: 'Content for SubTab 1 under Option 1' },
    //     { id: 2, label: 'SubTab 2', content: 'Content for SubTab 1 under Option 2' }
    //   ],
    //   2: [{ id: 2, label: 'SubTab 2', content: 'Content for SubTab 2 under Option 1' }],
    //   3: [{ id: 3, label: 'SubTab 3', content: 'Content for SubTab 3 under Option 2' }],
    // };
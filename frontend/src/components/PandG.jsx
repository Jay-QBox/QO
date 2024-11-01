import React, { useState } from 'react';
import { Tabs } from './Tabs';
import { MainSideBar } from './MainSideBar';
import img from "../assets/gruha.png";
import CardB from "./CardB";

export default function Opportunities() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);

  // SIDEBAR - OPTIONS
  const sidebarOptions = [
    { id: 1, label: 'Problems/Gaps' },
    { id: 2, label: 'Solutions' },
  ];
  const countryLevel = [
    {
      id: 0,
      title: "Country Level Card 1",
      desc: "Desc for Country Level Card 1",
      img: img,
      bullets: [
        { id: 1, text: "First bullet point with additional info." },
        { id: 2, text: "Second bullet point with more details." },
        { id: 3, text: "Third bullet point highlights an important fact." },
        { id: 4, text: "Fourth bullet point provides key insights." },
      ],
    },
    {
      id: 1,
      title: "Country Level Card 2",
      desc: "Desc for Country Level Card 2",
      img: img,
      bullets: [
        { id: 1, text: "First bullet point with additional info." },
        { id: 2, text: "Second bullet point with more details." },
        { id: 3, text: "Third bullet point highlights an important fact." },
        { id: 4, text: "Fourth bullet point provides key insights." },
      ],
    },
  ]
  const stateLevel = [
    {
      id: 0,
      title: "State Level Card 1",
      desc: "Desc for State Level Card 1",
      img: img, // Ensure 'img' variable is defined appropriately
      bullets: [
        { id: 1, text: "First bullet point for State Level Card 1." },
        { id: 2, text: "Second bullet point with more details for State Level Card 1." },
        { id: 3, text: "Third bullet point highlights an important fact for State Level Card 1." },
        { id: 4, text: "Fourth bullet point provides key insights for State Level Card 1." },
      ],
    },
    {
      id: 1,
      title: "State Level Card 2",
      desc: "Desc for State Level Card 2",
      img: img, // Ensure 'img' variable is defined appropriately
      bullets: [
        { id: 1, text: "First bullet point for State Level Card 2." },
        { id: 2, text: "Second bullet point with more details for State Level Card 2." },
        { id: 3, text: "Third bullet point highlights an important fact for State Level Card 2." },
        { id: 4, text: "Fourth bullet point provides key insights for State Level Card 2." },
      ],
    },
    {
      id: 2,
      title: "State Level Card 3",
      desc: "Desc for State Level Card 3",
      img: img, // Ensure 'img' variable is defined appropriately
      bullets: [
        { id: 1, text: "First bullet point for State Level Card 3." },
        { id: 2, text: "Second bullet point with more details for State Level Card 3." },
        { id: 3, text: "Third bullet point highlights an important fact for State Level Card 3." },
        { id: 4, text: "Fourth bullet point provides key insights for State Level Card 3." },
      ],
    },
    {
      id: 3,
      title: "State Level Card 4",
      desc: "Desc for State Level Card 4",
      img: img, // Ensure 'img' variable is defined appropriately
      bullets: [
        { id: 1, text: "First bullet point for State Level Card 4." },
        { id: 2, text: "Second bullet point with more details for State Level Card 4." },
        { id: 3, text: "Third bullet point highlights an important fact for State Level Card 4." },
        { id: 4, text: "Fourth bullet point provides key insights for State Level Card 4." },
      ],
    },
  ];
  const cityLevel = [
    {
      id: 0,
      title: "City Level Card 1",
      desc: "Detailed information for City Level Card 1 focusing on city-specific metrics and insights.",
      img: img, // Replace 'img' with actual image path or URL
      bullets: [
        { id: 1, text: "Local infrastructure developments impacting city growth." },
        { id: 2, text: "Analysis of population demographics within the city." },
        { id: 3, text: "Key economic drivers and sectors in the city." },
        { id: 4, text: "Upcoming public transport projects planned for the area." },
      ],
    },
    {
      id: 1,
      title: "City Level Card 2",
      desc: "Insights for City Level Card 2 including city economy and workforce statistics.",
      img: img, // Replace 'img' with actual image path or URL
      bullets: [
        { id: 1, text: "Top employment sectors within the city boundaries." },
        { id: 2, text: "Housing market trends affecting residents and investors." },
        { id: 3, text: "Public services overview and upcoming initiatives." },
        { id: 4, text: "Crime statistics and community safety efforts." },
      ],
    },
    {
      id: 2,
      title: "City Level Card 3",
      desc: "An overview of environmental efforts and sustainability initiatives for the city.",
      img: img, // Replace 'img' with actual image path or URL
      bullets: [
        { id: 1, text: "City's carbon reduction goals and recent achievements." },
        { id: 2, text: "Renewable energy projects and green spaces." },
        { id: 3, text: "Recycling programs and waste management initiatives." },
        { id: 4, text: "Water conservation measures and local resources." },
      ],
    },
    {
      id: 3,
      title: "City Level Card 4",
      desc: "Detailed information about the education and healthcare facilities in the city.",
      img: img, // Replace 'img' with actual image path or URL
      bullets: [
        { id: 1, text: "Overview of schools and educational resources." },
        { id: 2, text: "List of prominent hospitals and healthcare facilities." },
        { id: 3, text: "Health and wellness programs available to residents." },
        { id: 4, text: "Current initiatives on mental health awareness." },
      ],
    },
  ];
  // TABS - OPTIONS
  const tabsContent = {
    1: [
      { id: 1, label: 'Arogya Gruha', content: countryLevel },
      { id: 2, label: 'Arogya Vihara', content: stateLevel },
      { id: 3, label: 'Insta Meds', content: cityLevel },
    ],
    2: [
      { id: 1, label: 'Arogya Gruha', content: countryLevel },
      { id: 2, label: 'Arogya Vihara', content: stateLevel },
      { id: 3, label: 'Insta Meds', content: cityLevel },
    ],
    
  };

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
    setSelectedTab(tabsContent[id][0].id); // Default to the first tab of the selected option
  };

  const handleTabSelect = (id) => {
    setSelectedTab(id);
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
        <div className="ml-4 flex gap-5 flex-wrap">
          {tabsContent[selectedOption].find((tab) => tab.id === selectedTab)?.content.map((itm) => (
                  <CardB title={itm.title} imageUrl={itm.img} description={itm.desc} bullet={itm.bullets}/>
                ))}
        </div>
      </div>
    </div>
  );
}

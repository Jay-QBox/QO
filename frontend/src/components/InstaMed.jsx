import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import ViewMoreModal from "./ViewMoreModal";
import SemiFooter from "./SemiFooter";
import demoImg from "../assets/gruha.png";

export default function InstaMed() {
  const [selectedCategory, setSelectedCategory] = useState("All Packages");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const pharmaTab = [
    {
      title: "Pharma Drug A",
      desc: "A pharmaceutical drug used for treating various conditions.",
      img: demoImg,
      bullets: ["Effectiveness: High", "Usage: Daily", "Available Stock: 50"],
    },
    {
      title: "Pharma Drug B",
      desc: "An over-the-counter medicine for minor ailments.",
      img: demoImg,
      bullets: ["Effectiveness: Moderate", "Usage: As needed", "Available Stock: 120"],
    },
  ];

  const rlabTab = [
    {
      title: "R Lab Diagnostic Kit",
      desc: "A reliable diagnostic kit for routine health checkups.",
      img: demoImg,
      bullets: ["Accuracy: 98%", "Includes: Blood tests", "Price: $50"],
    },
    {
      title: "R Lab Blood Analyzer",
      desc: "Advanced analyzer for blood work analysis.",
      img: demoImg,
      bullets: ["Speed: Fast", "Usage: Laboratory", "Warranty: 1 year"],
    },
  ];

  const plabTab = [
    {
      title: "P Lab Chemistry Set",
      desc: "A complete set for chemical analysis and testing.",
      img: demoImg,
      bullets: ["Components: 30", "Usage: Educational", "Availability: In stock"],
    },
    {
      title: "P Lab Microscope",
      desc: "A high-resolution microscope for lab use.",
      img: demoImg,
      bullets: ["Magnification: 1000x", "Lens Type: Optical", "Warranty: 2 years"],
    },
  ];

  const supportTab = [
    {
      title: "Customer Support Guide",
      desc: "Guidelines on how to get support for products.",
      img: demoImg,
      bullets: ["Hours: 24/7", "Contact: support@example.com", "Phone: +1-800-123-4567"],
    },
    {
      title: "Technical Support",
      desc: "Dedicated support for technical assistance.",
      img: demoImg,
      bullets: ["Hours: Business hours", "Contact: techsupport@example.com", "Phone: +1-800-987-6543"],
    },
  ];

  // Combine all package data for "All Packages" view
  const allPackages = [...pharmaTab, ...rlabTab, ...plabTab];
  
  // Render cards based on selected category
  const currentCards =
    selectedCategory === "Pharma Lab"
      ? pharmaTab
      : selectedCategory === "R Lab"
      ? rlabTab
      : selectedCategory === "P Lab"
      ? plabTab
      : selectedCategory === "Customer Support"
      ? supportTab
      : allPackages; // Show all packages if "All Packages" is selected

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar setSelectedCategory={setSelectedCategory} selectedCategory = {selectedCategory}/>

      {/* Main Panel */}
      <div className="flex-grow p-5 ml-64"> {/* Adjust the margin to prevent overlap */}
        <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>

        {/* Card Display */}
        <div className="flex flex-wrap gap-4">
          {currentCards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.desc}
              imageUrl={card.img}
              onReadMore={() => openModal(card)}
            />
          ))}
        </div>

        <SemiFooter />

        {/* View More Modal */}
        {selectedCard && (
          <ViewMoreModal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={selectedCard.title}
            description={selectedCard.desc}
            bullet={selectedCard.bullets}
          />
        )}
      </div>
    </div>
  );
}

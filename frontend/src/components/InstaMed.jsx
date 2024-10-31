// Created By Jaymin Entire code - add comment for re-change or bug fix
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import ViewMoreModal from "../components/ViewMoreModal";
import SemiFooter from "../components/SemiFooter";
import { pharmaTab, rlabTab, plabTab, supportTab } from "../data/instamedData";

export default function InstaMed() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Determine cards based on selected category, leave "Packages" empty
  const currentCards =
    selectedCategory === "Pharma Lab"
      ? pharmaTab
      : selectedCategory === "R Lab"
      ? rlabTab
      : selectedCategory === "P Lab"
      ? plabTab
      : selectedCategory === "Customer Support"
      ? supportTab
      : selectedCategory === "Packages"
      ? [] // Empty array for "Packages" tab
      : [...pharmaTab, ...rlabTab, ...plabTab]; // Show all services for "All Services"

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex">
      <Sidebar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <div className="flex-grow p-5 ml-64">
        <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
        
        {/* Conditionally render cards if currentCards is not empty */}
        {currentCards.length > 0 ? (
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
        ) : (
          <p className="text-gray-500">No items available in this category.</p> // Message for empty "Packages" tab
        )}

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

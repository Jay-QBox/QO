// Created By Jaymin Entire code - add comment for re-change or bug fix
import React, { useState } from "react";
import Card from "./Card";
import ViewMoreModal from "./ViewMoreModal";
import SemiFooter from "./SemiFooter";
import SidebarV from "./SidebarV";
import {
  services,
  packages,
  customerSupport,
} from "../data/viharaData";

const vihar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const currentCards =
  selectedCategory === "services"
    ? services 
    : selectedCategory === "Packages"
    ? packages // Show the data for packages tab
    : selectedCategory === "Customer Support"
    ? customerSupport // Show the data for customer support tab
    : [...services]; 

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex">
      <SidebarV setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      <div className="flex-grow p-5 ml-64">
        <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
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
};

export default vihar;

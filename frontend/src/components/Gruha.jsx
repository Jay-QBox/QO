import React, { useEffect, useState } from "react";
import Card from "./Card";
import ViewMoreModal from "./ViewMoreModal";
import SemiFooter from "./SemiFooter";

const ParentComponent = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://qobox-backbone.vercel.app/api/cards/view/category/gruh"
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching the cards:", error);
      }
    };

    fetchCards();
  }, []);
  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null); // Clear selected card
  };
  return (
    // <>
    <div className="flex flex-wrap flex-col justify-center gap-10">
      <div class="block mb-4 mx-auto border-b mt-10 border-slate-300 pb-2 max-w-[360px]">
        <a
          target="_blank"
          class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
        >
          <b>Arogya Vihara Services</b>.
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.cardTitle}
            description={card.cardParagraph}
            bullet={cards.cardBullets}
            imageUrl={card.cardImage}
            onReadMore={() => openModal(card)}
          />
        ))}
      </div>
      <SemiFooter/>

      {/* Render the modal */}
      {selectedCard && (
        <ViewMoreModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedCard.cardTitle}
          description={selectedCard.cardParagraph}
          bullet={selectedCard.cardBullets}
        />
      )}
    </div>
  );
};

export default ParentComponent;

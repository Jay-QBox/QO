import React, { useEffect, useState } from 'react';
import Card from './Card'; // Adjust the import path based on your file structure
import ViewMoreModal from './ViewMoreModal';

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
    <div className="flex flex-wrap justify-center gap-10">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.cardTitle} 
          description={card.cardParagraph} 
          bullet={cards.cardBullets}
          imageUrl={card.cardImage} 
          onReadMore={() => openModal(card)} 
          // Adjust the property name based on the actual API response
        />
      ))}

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

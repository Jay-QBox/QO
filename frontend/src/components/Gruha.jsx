// Created By Jaymin Entire code - add comment for re-change or bug fix
import React, { useState } from "react";
import Card from "./Card";
import ViewMoreModal from "./ViewMoreModal";
import SemiFooter from "./SemiFooter";
import SidebarG from "./SidebarG";
import {
  homecarePost,
  homecareMedServices,
  homecareEmergencyServices,
  homecareEquipment,
  homecareMonitoringDevices,
  homecareElderly,
  homecareFitness,
  nearbyRehabCenters,
  nearbyTherapyCenters,
  endOfLifeCare,
  homecareVaccination,
  hospitalSearch,
  nearbyClinics,
  packages,
  customerSupport,
} from "../data/gruhaData";

const Gruha = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const currentCards =
  selectedCategory === "Homecare Post/Pre Hospital Services"
    ? homecarePost
    : selectedCategory === "Homecare Med Services"
    ? homecareMedServices
    : selectedCategory === "Homecare Medical Emergency service"
    ? homecareEmergencyServices
    : selectedCategory === "Homecare/ Hospital equipments for rent/buy"
    ? homecareEquipment
    : selectedCategory === "Homecare Medical Monitoring devices"
    ? homecareMonitoringDevices
    : selectedCategory === "Homecare for Elderly people"
    ? homecareElderly
    : selectedCategory === "Homecare Fitness"
    ? homecareFitness
    : selectedCategory === "Nearby Rehab Centers"
    ? nearbyRehabCenters
    : selectedCategory === "Nearby Therapy Centers"
    ? nearbyTherapyCenters
    : selectedCategory === "End-of-life Care"
    ? endOfLifeCare
    : selectedCategory === "Homecare Vaccination"
    ? homecareVaccination
    : selectedCategory === "Hospital search within City and Across India"
    ? hospitalSearch
    : selectedCategory === "Nearby Clinics"
    ? nearbyClinics
    : selectedCategory === "Packages"
    ? packages // Show the data for packages tab
    : selectedCategory === "Customer Support"
    ? customerSupport // Show the data for customer support tab
    : [...homecarePost, ...homecareMedServices, ...homecareEmergencyServices, ...homecareEquipment, ...homecareMonitoringDevices, ...homecareElderly, ...homecareFitness, ...nearbyRehabCenters, ...nearbyTherapyCenters, ...endOfLifeCare, ...homecareVaccination, ...hospitalSearch, ...nearbyClinics]; // Show all services for "All Services"

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex">
      <SidebarG setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

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

export default Gruha;

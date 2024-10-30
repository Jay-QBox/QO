import React, { useEffect, useState } from "react";
import Card from "./Card";
import ViewMoreModal from "./ViewMoreModal";
import SemiFooter from "./SemiFooter";
import demoImg from "../assets/gruha.png";

export default function Vihara() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [viharaTab, setViharaTab] = useState("Services");

  const tabs = [
    {
      id: 0,
      name: "Services",
    },
    {
      id: 1,
      name: "Packages",
    },
    {
      id: 2,
      name: "Customer Support ",
    },
  ];
  const servicesTab = [
    {
      id: 0,
      img: "https://qobox320-my.sharepoint.com/:i:/g/personal/sravani_g_qo-box_in/EZ1w81KpO0dDk1pUHRVyBr0BJtNX03bh3PYAlELWuGnhFA?e=4lEXRh",
      title: "Hospitals",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 1,
      img: demoImg,
      title: "Translators",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 2,
      img: demoImg,
      title: "Existing agents  ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 3,
      img: demoImg,
      title: "Flights ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 4,
      img: demoImg,
      title: "Visas  ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 5,
      img: demoImg,
      title: "Hotels ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 7,
      img: demoImg,
      title: "Car - Local travel   ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 8,
      img: demoImg,
      title: "Food services   ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 9,
      img: demoImg,
      title: "Authorized attenders/guide to assist  ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
  ];
  const packagesTab = [
    {
      id: 0,
      img: demoImg,
      title: "Medical Packages ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 1,
      img: demoImg,
      title: "Surgical Packages ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
  ];
  const supportTab = [
    {
      id: 0,
      img: demoImg,
      title: "AI Call Center ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 1,
      img: demoImg,
      title: "AI Chat Support  ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },

    {
      id: 2,
      img: demoImg,
      title: "WhatsApp and Email Support ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
  ];
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
    <div className="flex flex-wrap flex-col justify-center gap-0">
      <div class="block mb0 mx-auto border-b mt-10 border-slate-300 pb-0 max-w-[360px]">
        <a
          target="_blank"
          class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
        >
          <b>Arogya Vihara Services</b>
        </a>
      </div>
      <ul className="flex  row mx-auto gap-5  mt-12 items-center">
        {tabs.map((itm, index) => (
          <li
            onClick={() => setViharaTab(itm.name)}
            className={`cursor-pointer px-2 pb-3 list-none text-slate-700 ${
              viharaTab === itm.name && "text-base-primary border-b font-bold"
            }`}
            key={index}
          >
            {itm.name}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap justify-center gap-10">
        {(viharaTab === "Services"
          ? servicesTab
          : viharaTab === "Packages"
          ? packagesTab
          : supportTab
        ).map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.desc}
            bullet={card.bullets}
            imageUrl={card.img}
            onReadMore={() => openModal(card)}
          />
        ))}
      </div>
      <SemiFooter />

      {/* Render the modal */}
      {selectedCard && (
        <ViewMoreModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedCard.title} // Match 'title' with 'title' in servicesTabs
          description={selectedCard.desc} // Match 'desc' with 'description'
          bullet={selectedCard.bullets} // Match 'bullets' with 'bullet'
        />
      )}
    </div>
  );
}

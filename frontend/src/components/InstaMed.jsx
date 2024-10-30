import React, { useEffect, useState } from "react";
import Card from "./Card";
import ViewMoreModal from "./ViewMoreModal";
import SemiFooter from "./SemiFooter";
import demoImg from "../assets/gruha.png";

export default function InstaMed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [instaTab, setInstaTab] = useState("Insta Pharma");

  const tabs = [
    {
      id: 0,
      name: "Insta Pharma",
    },
    {
      id: 1,
      name: "Insta RLab",
    },
    {
      id: 2,
      name: "Insta PLab",
    },
  ];
  const pharmaTab = [
    {
      id: 0,
      img: demoImg,
      title: "Onboarding Pharmacies ",
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
      title: "Search/Display Nearby Pharmacy  ",
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
      title: "Place order for medicine ",
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
      title: "Payments",
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
      title: "Historical Data ",
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
      title: "Prescription Display  ",
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
      title: "Subscription & Package model ",
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
      title: "Individual Profile maintenance ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
  ];
  const rlabTab = [
    {
      id: 0,
      img: demoImg,
      title: "Onboarding R Lab",
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
      title: "Search/Display Nearby Radiology lab  ",
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
      title: "Booking slots for scanning ",
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
      title: "Payments ",
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
      title: "Historical data   ",
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
      title: "Subscription & Package model   ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 6,
      img: demoImg,
      title: "Individual Profile maintenance  ",
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
      title: "Reports display",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
  ];
  const plabTab = [
    {
      id: 0,
      img: demoImg,
      title: "Onboarding P Lab",
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
      title: "Search/Display Nearby Pathology lab  ",
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
      title: "Booking slots for sample collection ",
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
      title: "Payments ",
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
      title: "Historical data   ",
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
      title: "Subscription & Package model   ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "ICU home care setup ",
      //   "Post-operative Care ",
      //   "Palliative care ",
      // ],
    },
    {
      id: 6,
      img: demoImg,
      title: "Individual Profile maintenance  ",
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
      title: "Reports display",
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
      \
      <div class="block mb0 mx-auto border-b mt-10 border-slate-300 pb-0 max-w-[360px]">
        <a
          target="_blank"
          class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
        >
          <b>Lazy Meds Services</b>.
        </a>
      </div>
      <ul className="flex  row mx-auto gap-5  mt-12 items-center">
        {tabs.map((itm, index) => (
          <li
            onClick={() => setInstaTab(itm.name)}
            className={`cursor-pointer px-2 pb-3 list-none text-base-grey ${
              instaTab === itm.name && "text-base-primary border-b font-bold"
            }`}
            key={index}
          >
            {itm.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center gap-10">
        {(instaTab === "Insta Pharma"
          ? pharmaTab
          : instaTab === "Insta RLab"
          ? rlabTab
          : plabTab
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

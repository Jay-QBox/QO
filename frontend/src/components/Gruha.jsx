import React, { useEffect, useState } from "react";
import Card from "./Card";
import ViewMoreModal from "./ViewMoreModal";
import SemiFooter from "./SemiFooter";
import demoImg from "../assets/gruha.png";
const ParentComponent = () => {
  // const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [gruhaTab, setGruhaTab] = useState("Services");

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
  const servicesTabs = [
    {
      id: 0,
      img: demoImg,
      title: "Homecare Post/Pre Hospital Services",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: [
        "ICU home care setup ",

        "Post-operative Care ",

        "Palliative care ",

        "General/ ICU Nursing care  ",
        "Care Taker/ Patient Attender ",
      ],
    },
    {
      id: 1,
      img: demoImg,
      title: "Homecare Med Services",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: [
        "Doctor on Tele /video Call/ Home Visit ",
        "Physiotherapy on Tele /video Call/ Home Visit ",
        "Psychiatric Tele /video Call/ Home Visit ",
      ],
    },
    {
      id: 2,
      img: demoImg,
      title: "Homecare Medical Emergency service ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: ["Ambulance support ", "Emergency coordination and support "],
    },
    {
      id: 3,
      img: demoImg,
      title: "Homecare/ Hospital equipments for rent/buy ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: [
        "IV Infusion Setup ",

        "Ryles Tube Setup",

        "Urine Catheter Setup - Male/Female ",

        "Mobility Aid Devices wheelchairs, walkers, walking stick etc",

        "Home ECG and Xray ",

        "Ambulatory BP ",

        "Oxygen Concentrator ",

        "Vaccinations @ Home ",

        "Hospital Beds ",

        "Air Mattress, bed backrest ",

        "Medical Devices - nebulizer, suction machine, cardiac monitor, syringe pump, DVT pump, compression stockings",

        "IV Infusion Setup ",

        "Chemotherapy & Dialysis Support ",
      ],
    },
    {
      id: 4,
      img: demoImg,
      title: "Homecare Medical Monitoring devices ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: ["Heart", "BP", "Vital", "Diabetics"],
    },
    {
      id: 5,
      img: demoImg,
      title: "Homecare for Elderly people ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: [
        "Health monitoring devices",

        "Diet & Nutrition @cloud kitchen ",

        "Home safety & security - antiskid, cc cameras",
        "Emergency Co-ordination ",

        " Ambulance Support ",

        " Hospitalization support ",

        "Bedside Attendants ",

        "Home Safety & Security ",

        " Companion Service",

        "Travel & Concierge",
      ],
    },
    {
      id: 6,
      img: demoImg,
      title: "Homecare Fitness  ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: [
        "Online Gym Trainer ",

        "Online Yoga Trainer ",

        "Online Mental Health Trainer ",

        "Online Nutrition & food providers",
      ],
    },
    {
      id: 7,
      img: demoImg,
      title: "Nearby Rehab Centers ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: [
        "Cancer",

        "Orthopedic Rehabilitation ",

        " Cardiac Rehabilitation ",

        "Pulmonary Rehabilitation ",
        "Neurological Rehabilitation ",
      ],
    },
    {
      id: 8,
      img: demoImg,
      title: "Nearby Deaddiction centers ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: ["Drug", "Alcohol", "Detoxification"],
    },
    {
      id: 9,
      img: demoImg,
      title: "Nearby Therapy Centers ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: ["Behavior", "Speech"],
    },
    {
      id: 9,
      img: demoImg,
      title: "Nearby Therapy Centers ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: ["Behavior", "Speech"],
    },
    {
      id: 9,
      img: demoImg,
      title: "End-of-life Care",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      bullets: ["Ice box ", " Traveling for last ride"],
    },
  ];
  const packagesTabs = [
    {
      id: 0,
      img: demoImg,
      title: "Homecare Med Packages ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "Provides personalized healthcare at home",
      //   "Assists with daily living activities",
      //   "Monitors vital signs and medication",
      //   "Supports patient comfort and mobility",
      // ],
    },
    {
      id: 1,
      img: demoImg,
      title: "Fitness Packages",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "Provides personalized healthcare at home",
      //   "Assists with daily living activities",
      //   "Monitors vital signs and medication",
      //   "Supports patient comfort and mobility",
      // ],
    },
    {
      id: 2,
      img: demoImg,
      title: "Nearby rehab packages",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "Provides personalized healthcare at home",
      //   "Assists with daily living activities",
      //   "Monitors vital signs and medication",
      //   "Supports patient comfort and mobility",
      // ],
    },
  ];
  const supportTabs = [
    {
      id: 0,
      img: demoImg,
      title: "AI Call Center ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "Provides personalized healthcare at home",
      //   "Assists with daily living activities",
      //   "Monitors vital signs and medication",
      //   "Supports patient comfort and mobility",
      // ],
    },
    {
      id: 1,
      img: demoImg,
      title: "AI Chat Support ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "Provides personalized healthcare at home",
      //   "Assists with daily living activities",
      //   "Monitors vital signs and medication",
      //   "Supports patient comfort and mobility",
      // ],
    },
    {
      id: 0,
      img: demoImg,
      title: "WhatsApp and Email Support ",
      desc: "This card highlights the benefits of home care nursing, focusing on personalized healthcare support and patient well-being in a home setting.",
      // bullets: [
      //   "Provides personalized healthcare at home",
      //   "Assists with daily living activities",
      //   "Monitors vital signs and medication",
      //   "Supports patient comfort and mobility",
      // ],
    },
  ];

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://qobox-backbone.vercel.app/api/cards/view/category/gruh"
  //       );
  //       const data = await response.json();
  //       setCards(data);
  //     } catch (error) {
  //       console.error("Error fetching the cards:", error);
  //     }
  //   };

  //   fetchCards();
  // }, []);
  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null); // Clear selected card
  };
  console.log(gruhaTab);
  return (
    // <>
    <div className="flex flex-wrap flex-col justify-center gap-0">
      <div class="block mb0 mx-auto border-b mt-10 border-slate-300 pb-0 max-w-[360px]">
        <a
          target="_blank"
          class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
        >
          <b>Arogya Guhara Services</b>.
        </a>
      </div>
      <ul className="flex  row mx-auto gap-5  mt-12 items-center">
        {tabs.map((itm, index) => (
          <li
            onClick={() => setGruhaTab(itm.name)}
            className={`cursor-pointer px-2 pb-3 list-none text-slate-700 ${
              gruhaTab === itm.name && "text-base-primary border-b font-bold"
            }`}
            key={index}
          >
            {itm.name}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap justify-center gap-10">
        {(gruhaTab === "Services"
          ? servicesTabs
          : gruhaTab === "Packages"
          ? packagesTabs
          : supportTabs
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
};

export default ParentComponent;

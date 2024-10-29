import React from "react";
import SemiFooter from "./SemiFooter";

export default function Vihara() {
  const services = [
    {
      id: 0,
      title: "Hospital Package",
      desc: " Comprehensive healthcare services with expert medical staff, advanced facilities, and compassionate care to meet all patient needs effectively.",
    },
    {
      id: 1,
      title: "Transportation Package",
      desc: " Reliable, efficient transportation services ensuring seamless travel experiences with safety and comfort for local and long-distance journeys,",
    },
    {
      id: 2,
      title: "Visa Package",
      desc: "Simplified visa assistance, guiding you through applications and documentation for a hassle-free travel experience worldwide.",
    },
    {
      id: 3,
      title: "Hotel Package",
      desc: "Affordable, luxurious hotel packages tailored to your needs, offering premium stays with exclusive amenities and memorable experiences.",
    },
    {
      id: 4,
      title: "Agents Package",
      desc: " Special benefits and streamlined support for agents managing client bookings.",
    },
    {
      id: 5,
      title: "Local Travel Package",
      desc: " Convenient transport and lodging for nearby destinations.",
    },
    {
      id: 6,
      title: "Food Package",
      desc: "Meal plans covering diverse dietary needs, with customizable options.",
    },
    {
      id: 7,
      title: "Athorized Attenders Package",
      desc: " Essentials for attendants assisting travelers, including meals and accommodations.",
    },
  ];
  return (
    <>
    <div class="flex justify-center mt-20 items-start min-h-screen flex-wrap">
      <div class=" mx-auto">
        <div class="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
          <a
            target="_blank"
            class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
          >
            <b>Arogya Vihara Services</b>.
          </a>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          {services.map((itm, index) => (
            <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 justify-between">
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <p class="block font-sans text-black antialiased font-medium leading-relaxed text-blue-gray-900">
                    {itm.title}
                  </p>
                </div>
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  {itm.desc}
                </p>
              </div>
              {/* <div class="p-6 pt-0">
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
    <SemiFooter/>
    </>

  );
}

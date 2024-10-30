import React from "react";
import gruha from "../assets/gruha.png";
import vihara from "../assets/vihara.png";
import im from "../assets/im.webp";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import SemiFooter from "./SemiFooter";

export default function Services() {
  const services = [
    {
      id: 0,
      title: "Arogya Gruha",
      img: gruha,
      desc: "Arogya Gruha is your trusted companion for holistic wellness at home. We offer resources, guidance, and solutions to foster a healthier, balanced lifestyle.",
      href: "/services/ag",
    },
    {
      id: 1,
      title: "Arogya Vihara",
      img: vihara,

      desc: "Arogya Vihar is your destination for comprehensive wellness and health retreats, offering rejuvenating experiences that promote holistic healing and balance.",
      href: "/services/av",
    },
    {
      id: 2,
      title: "Lazy Meds",
      img: im,

      desc: "Insta Medical Services provides rapid, reliable healthcare solutions right when you need them, ensuring accessible and efficient medical care for all.",
      href: "/services/im",
    },
  ];
  return (
    <>
    <div class="flex justify-center mt-20 items-start min-h-screen flex-wrap">
      <div class=" mx-auto">
        <div class="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
          <a
            target="_blank"
            // href="#"
            class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
          >
            <b>Platforms</b>
          </a>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          {services.map((itm, index) => (
            <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={itm.img}
                  alt="card-image"
                  class="object-cover w-full h-full"
                />
              </div>
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
              <div class="p-6 pt-0">
                  <Link 
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-base text-blue-gray-900 shadow-none  hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  to={itm.href} 
                
                  >
                  Explore

                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
    <SemiFooter/>
    </>
          
  );
}

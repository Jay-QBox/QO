// src/data/packageData.js
// Created by Jaymin: Entire code - please add comments for changes or bug fixes.
import demoImg from "../assets/gruha.png";
import images from "../assets/imgs/img";

export const services = [
  {
    title: "Hospitals",
    desc: "Our medical tourism platform offers access to 1-tier, 2-tier, and 3-tier hospitals across India, providing specialized treatments, advanced diagnostics, and personalized care tailored to every budget and medical need.",
    img: images.Hospitals_AV, // Make sure the key matches your image imports
    bullets: [],
  },
  {
    title: "Translators",
    desc: "Our platform provides certified medical translators to bridge language barriers, ensuring clear communication between patients and healthcare providers for a seamless treatment experience.",
    img: images.Translators1_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Existing Agents",
    desc: "We partner with experienced local agents who offer personalized assistance, from pre-travel planning to on-ground support, making the entire medical journey hassle-free.",
    img: images.ExistingAgents_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Flights",
    desc: "We arrange cost-effective and convenient flights tailored to each patient’s schedule, taking care of every detail to ensure a smooth arrival and departure experience.",
    img: images.Flights_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Visas",
    desc: "Our dedicated visa team assists with medical visa applications and documentation, streamlining the process for faster approvals and hassle-free entry into the country.",
    img: images.Visas_1_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Hotels",
    desc: "Trusted accommodations that prioritize comfort, safety, and proximity to healthcare facilities, offering patients and families a restful environment for recovery and relaxation.",
    img: images.Hotels_2_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Car - Local Travel",
    desc: "Reliable, comfortable local transportation options are arranged, ensuring safe and efficient travel between medical appointments, accommodations, and other essential destinations.",
    img: images.Car_LocalTravel_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Food Services",
    desc: "We offer tailored meal plans from trusted providers, catering to dietary restrictions and preferences to ensure patients maintain proper nutrition during their treatment.",
    img: images.Food_Services_3_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Authorized Attenders/Guide to Assist",
    desc: "Trained guides accompany patients throughout their medical journey, providing compassionate support, cultural insights, and assistance with appointments, medications, and hospital visits.",
    img: images.AuthorisedAttenders_AV, // Adjust the image import key
    bullets: [],
  },
];

export const packages = [
  {
    title: "Medical Packages",
    desc: "Comprehensive medical packages designed to cater to various healthcare needs, ensuring quality treatment and care at competitive prices.",
    img: images.Medical_Packages_AV, 
    bullets: [],
  },
  {
    title: "Surgical Packages",
    desc: "Specialized surgical packages that include pre-operative and post-operative care, aimed at providing patients with all necessary support during their surgical journey.",
    img: images.Surgical_Packages_AV, 
    bullets: [],
  },
];

export const customerSupport = [
  {
    title: "AI Call Center",
    desc: "Our AI Call Center provides 24/7 support, handling inquiries and resolving issues efficiently. With advanced voice recognition and natural language processing, it ensures quick and accurate responses to customer queries.",
    img: images.call,
  },
  {
    title: "AI Chat Support",
    desc: "AI Chat Support offers instant assistance through our website and mobile app, providing answers to common questions, troubleshooting, and service requests at any time.",
    img: images.customer, // Placeholder image, replace with actual image if available
  },
  {
    title: "WhatsApp and Email Support",
    desc: "Customers can reach out via WhatsApp or email for personalized support. Our team is dedicated to responding promptly to ensure all inquiries are addressed efficiently.",
    img: demoImg, // Placeholder image, replace with actual image if available
  },
];

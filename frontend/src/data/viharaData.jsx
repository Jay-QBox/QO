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
    desc: "Professional translators available to assist patients with language barriers during their medical journey.",
    img: images.Translators1_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Existing Agents",
    desc: "Access to experienced agents who can help navigate the medical tourism process.",
    img: images.ExistingAgents_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Flights",
    desc: "Convenient flight arrangements to facilitate travel for medical treatments.",
    img: images.Flights_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Visas",
    desc: "Assistance with visa processing for medical travelers.",
    img: images.Visas_1_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Hotels",
    desc: "Comfortable hotel accommodations near medical facilities.",
    img: images.Hotels_2_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Car - Local Travel",
    desc: "Local transportation options for patients and their families during their stay.",
    img: images.Car_LocalTravel_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Food Services",
    desc: "Nutritional meal options tailored to dietary needs during recovery.",
    img: images.Food_Services_3_AV, // Adjust the image import key
    bullets: [],
  },
  {
    title: "Authorized Attenders/Guide to Assist",
    desc: "Professional guides to help patients navigate their medical journey.",
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

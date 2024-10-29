import React from "react";
import SemiFooter from "./SemiFooter";
import { MdAppRegistration } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import { MdSpatialTracking } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";


export default function InstaMed() {
  const services = [
    {
      id: 0,
      title: "Vendor Registration and Dashboard",
      icon:<MdAppRegistration style={{ fontSize: '40px' }}/>,
      desc: "Allow vendors to register easily and manage their own stores through a personalized dashboard. Vendors can upload products, track orders, and manage inventory, making it user-friendly for pharmacy owners.",
    },
    {
      id: 1,
      icon:<AiFillProduct style={{ fontSize: '40px' }}/>,
      title: "Product Management",
      desc: " Vendors can add, edit, and delete their medicine listings, including detailed descriptions, dosages, prices, and images. This feature ensures that customers receive accurate and up-to-date product information.",
    },
    {
      id: 2,
      icon:<IoSearch style={{ fontSize: '40px' }} />,

      title: "Search and Filter Options",
      desc: "Implement advanced search and filtering options for users to easily find medicines by name, category, brand, or price range. This enhances user experience by making product discovery simple and efficient.",
    },
    {
      icon:<IoIosCart style={{ fontSize: '40px' }}/>,
      id: 3,
      title: "Shopping Cart and Checkout",
      desc: " A user-friendly shopping cart that allows customers to add multiple items and proceed to checkout seamlessly. This feature should support various payment options, including credit/debit cards, digital wallets, and cash on delivery.",
    },
    {
      icon:<MdSpatialTracking style={{ fontSize: '40px' }}/>,
      id: 4,
      title: "Order Tracking",
      desc: " Provide customers with real-time order tracking updates. Users can view the status of their orders, including processing, shipping, and delivery, enhancing transparency and customer satisfaction.",
    },
    {
      id: 5,      icon:<MdReviews style={{ fontSize: '40px' }}/>,

      title: "Rating and Reviews",
      desc: " Enable customers to leave ratings and reviews for products and vendors. This feature builds trust and helps future customers make informed decisions based on others' experiences.",
    },
    {
      icon:<MdAdminPanelSettings style={{ fontSize: '40px' }}/>,
      id: 6,
      title: "Admin Panel",
      desc: "A comprehensive admin panel for site administrators to oversee vendor registrations, manage product listings, track sales, and handle disputes. This feature ensures smooth operations and effective management of the marketplace.",
    },
    {
      icon:<FaPrescriptionBottleAlt style={{ fontSize: '40px' }}/>,
      id: 7,
      title: "Prescription Upload",
      desc: "Allow customers to upload prescriptions for medicines that require a doctor's approval. This feature enhances compliance and safety, ensuring customers receive the correct medications.",
    },
    {
      icon:<BiSolidDiscount style={{ fontSize: '40px' }}/>,
      id: 8,
      title: "Discounts and Promotions",
      desc: " Enable vendors to create promotional campaigns, offer discounts, and manage coupon codes. This encourages sales and attracts more customers to the platform.",
    },
    {
      icon:<MdOutlineSupportAgent style={{ fontSize: '40px' }}/>,
      id: 9,
      title: "Customer Support",
      desc: ": Offer a dedicated customer support system via chat, email, or phone. This feature helps address user queries and concerns promptly, improving overall customer satisfaction.",
    },
    {
      icon:<MdPayments style={{ fontSize: '40px' }}/>,
      id: 10,
      title: "Secure Payment Gateway",
      desc: " Integrate secure payment gateways to ensure safe transactions for users. This feature builds trust and provides peace of mind when purchasing medicines online.",
    },

    {
      icon:<MdOutlineInventory style={{ fontSize: '40px' }}/>,
      id: 11,
      title: "Inventory Management",
      desc: "Vendors can manage their stock levels effectively, receive notifications for low inventory, and prevent stockouts. This feature ensures product availability and streamlines operations.",
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
            <b>InstaMed Services</b>.
          </a>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          {services.map((itm, index) => (
            <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 justify-between">
              <div class="p-6">
                <div >{itm.icon}</div>
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
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
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

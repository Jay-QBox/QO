// Created By Jaymin Entire code - add comment for re-change or bug fix
import React, { useState } from "react";

const Sidebar = ({ setSelectedCategory, selectedCategory }) => {
  const [isPackageOpen, setIsPackageOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Categories with expandable services
  const categories = [
    {
      name: "Services",
      isExpandable: true,
      subCategories: [
        "Homecare Post/Pre Hospital Services",
        "Homecare Med Services",
        "Homecare Medical Emergency service",
        "Homecare/ Hospital equipments for rent/buy",
        "Homecare Medical Monitoring devices",
        "Homecare for Elderly people",
        "Homecare Fitness",
        "Nearby Rehab Centers",
        "Nearby Dedication Center",
        "Nearby Therapy Centers",
        "End-of-life Care",
        "Homecare Vaccination",
        "Hospital search within City and Across India",
        "Nearby Clinics",
      ],
    },
    { name: "Packages", isExpandable: false },
    { name: "Customer Support", isExpandable: false },
  ];

  // Handle category or subcategory selection
  const handleClick = (category, isSubCategory = false) => {
    setSelectedCategory(category);
    if (isSubCategory && window.innerWidth < 768) setIsSidebarOpen(false); // Close sidebar on mobile
  };

  return (
    <div className="relative h-full">
      {/* Toggle Button for Mobile View */}
      <button
        className="lg:hidden p-2 m-2 text-gray-800 bg-white border border-orange-500 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-15 left-0 h-full bg-white text-gray-800 w-64 p-4 transition-transform duration-300 shadow-md ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto scrollbar-thin`}
      >
        <ul className="flex flex-col gap-2">
          {categories.map(({ name, isExpandable, subCategories }) => (
            <React.Fragment key={name}>
              {/* Main Category */}
              <li
                className={`py-2 px-4 hover:bg-gray-200 cursor-pointer rounded border-orange-500 ${
                  selectedCategory === name && "bg-gray-200"
                }`}
                onClick={() =>
                  isExpandable
                    ? setIsPackageOpen(!isPackageOpen)
                    : handleClick(name)
                }
              >
                {name}
              </li>

              {/* Subcategories */}
              {isExpandable && isPackageOpen && (
                <ul className="pl-8 flex flex-col gap-2">
                  {subCategories.map((sub) => (
                    <li
                      key={sub}
                      className={`py-2 px-4 text-sm hover:bg-gray-200 rounded cursor-pointer ${
                        selectedCategory === sub && "bg-gray-200"
                      }`}
                      onClick={() => handleClick(sub, true)}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

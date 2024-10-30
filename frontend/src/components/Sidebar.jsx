import React, { useState } from "react";

const Sidebar = ({ setSelectedCategory }) => {
  const [isPackageOpen, setIsPackageOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Start with sidebar open

  // Function to handle submenu clicks
  const handleSubMenuClick = (category) => {
    setSelectedCategory(category);

    // Check if the sidebar should close based on screen width
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false); // Close sidebar on mobile
    }
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
        }`}
      >
        <ul>
          {/* Package Menu */}
          <li
            className="py-2 px-4 hover:bg-gray-200 cursor-pointer border-b border-orange-500"
            onClick={() => setIsPackageOpen(!isPackageOpen)}
          >
            Package
          </li>
          {isPackageOpen && (
            <ul className="pl-8 bg-gray-100">
              <li
                className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSubMenuClick("Pharma Lab")}
              >
                Pharma Lab
              </li>
              <li
                className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSubMenuClick("R Lab")}
              >
                R Lab
              </li>
              <li
                className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSubMenuClick("P Lab")}
              >
                P Lab
              </li>
            </ul>
          )}
          {/* Customer Support */}
          <li
            className="py-2 px-4 hover:bg-gray-200 cursor-pointer border-b border-orange-500"
            onClick={() => handleSubMenuClick("Customer Support")}
          >
            Customer Support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

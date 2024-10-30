import React, { useState } from "react";

const Sidebar = ({ setSelectedCategory }) => {
  const [isPackageOpen, setIsPackageOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile toggle

  return (
    <div className="relative h-full">
      {/* Toggle Button for Mobile View */}
      <button
        className="lg:hidden p-2 m-2 text-white bg-gray-800 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 lg:sticky lg:top-0 lg:h-screen bg-gray-800 text-white w-64 p-4 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <ul>
          {/* Package Menu */}
          <li
            className="py-2 px-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => setIsPackageOpen(!isPackageOpen)}
          >
            Package
          </li>
          {isPackageOpen && (
            <ul className="pl-8 bg-gray-900">
              <li
                className="py-2 px-4 hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setSelectedCategory("Pharma Lab");
                  setIsSidebarOpen(false); // Close sidebar on mobile
                }}
              >
                Pharma Lab
              </li>
              <li
                className="py-2 px-4 hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setSelectedCategory("R Lab");
                  setIsSidebarOpen(false);
                }}
              >
                R Lab
              </li>
              <li
                className="py-2 px-4 hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setSelectedCategory("P Lab");
                  setIsSidebarOpen(false);
                }}
              >
                P Lab
              </li>
            </ul>
          )}
          {/* Customer Support */}
          <li
            className="py-2 px-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => {
              setSelectedCategory("Customer Support");
              setIsSidebarOpen(false);
            }}
          >
            Customer Support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

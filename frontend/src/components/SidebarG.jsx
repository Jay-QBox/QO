import React, { useState } from "react";

const Sidebar = ({ setSelectedCategory, selectedCategory, serviceTabs }) => {
  const [isPackageOpen, setIsPackageOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSubMenuClick = (category) => {
    setSelectedCategory(category);

    if (window.innerWidth < 768) {
      setIsSidebarOpen(false); // Close sidebar on mobile
    }
  };

  return (
    <div className="relative h-full">
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
        } overflow-y-auto scrollbar-thin`} // thin scroll added by jaymin check index css for clarity
      >
        <ul className="flex flex-col gap-2">
          <li
            className={`py-2 px-4 hover:bg-gray-200 cursor-pointer rounded border-orange-500 ${
              selectedCategory === "Services" && "bg-gray-200"
            }`}
            onClick={() => setIsPackageOpen(!isPackageOpen)}
          >
            Services
          </li>
          {isPackageOpen && (
            <ul className="pl-8 flex flex-col gap-2">
              {serviceTabs.map((itm) => (
                <li
                  key={itm.title}
                  className={`py-2 px-4 text-sm hover:bg-gray-200 rounded cursor-pointer ${
                    selectedCategory === itm.title && "bg-gray-200"
                  }`}
                  onClick={() => handleSubMenuClick(itm.title)}
                >
                  {itm.title}
                </li>
              ))}
              <li
                className={`py-2 px-4 hover:bg-gray-200 rounded cursor-pointer ${
                  selectedCategory === "Pharma Lab" && "bg-gray-200"
                }`}
                onClick={() => handleSubMenuClick("Pharma Lab")}
              >
                Pharma Lab
              </li>
              <li
                className={`py-2 px-4 hover:bg-gray-200 rounded cursor-pointer ${
                  selectedCategory === "R Lab" && "bg-gray-200"
                }`}
                onClick={() => handleSubMenuClick("R Lab")}
              >
                R Lab
              </li>
              <li
                className={`py-2 px-4 hover:bg-gray-200 rounded cursor-pointer ${
                  selectedCategory === "P Lab" && "bg-gray-200"
                }`}
                onClick={() => handleSubMenuClick("P Lab")}
              >
                P Lab
              </li>
            </ul>
          )}
          <li
            className={`py-2 px-4 hover:bg-gray-200 cursor-pointer rounded border-orange-500 ${
              selectedCategory === "Packages" && "bg-gray-200"
            }`}
            onClick={() => handleSubMenuClick("Packages")}
          >
            Packages
          </li>
          <li
            className={`py-2 px-4 hover:bg-gray-200 cursor-pointer rounded border-orange-500 ${
              selectedCategory === "Customer Support" && "bg-gray-200"
            }`}
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

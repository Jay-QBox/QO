import React from 'react';

export function SubTabs({ subTabs, selectedSubTab, onSelectSubTab }) {
  return (
    <div className="flex mt-4">
      {subTabs.map((subTab) => (
        <button
          key={subTab.id}
          onClick={() => onSelectSubTab(subTab.id)}
          className={`px-3 py-1 bg-white s${
            selectedSubTab === subTab.id ? 'bg-white text-base' : 'text-gray-500'
          }`}
        >
          {subTab.label}
        </button>
      ))}
    </div>
  );
}

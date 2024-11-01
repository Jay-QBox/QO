import React from 'react';

export function MainSideBar({ options, selectedOption,heading, onSelectOption }) {
  return (
    <div className="w-64 p-4 bg-gray-100 border-r relative h-full">
      <h2 className="font-bold text-lg mb-2">{heading}</h2>
      {options.map((option) => (
        <button
          key={option.id}
          style={{ outline: 'none' }}

          onClick={() => onSelectOption(option.id)}
          className={`block w-full bg-white text-left px-4 py-2 mb-2 ${
            selectedOption === option.id ? 'bg-white text-base' : 'text-gray-700 hover:bg-gray-200'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}


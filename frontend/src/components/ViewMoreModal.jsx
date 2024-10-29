// Modal.js
import React from 'react';

const ViewMoreModal = ({ isOpen, onClose, title,bullet, description }) => {
  if (!isOpen) return null; // Do not render if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4 w-1/2">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-slate-600 leading-normal font-light">
          {description}
        </p>
        {/* Render bullet points */}
        {bullet && bullet.length > 0 && (
          <ul className="list-disc list-inside mb-4">
            {bullet.map((point, index) => (
              <li key={index} className="text-gray-700">{point}</li>
            ))}
          </ul>
        )}
        <button
          className="mt-4 bg-base text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewMoreModal;

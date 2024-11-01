import React from "react";

export default function Card2({ title, description, imageUrl, bullet }) {
  return (
    <div className="cursor-pointer relative flex flex-col my-6 bg-white shadow-sm justify-between border border-slate-200 rounded-lg w-96 hover:shadow-lg bg-black-500">
      <div>
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            src={imageUrl}
            alt="card-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-lg font-semibold">{title}</h6>
          <p className="text-slate-600 text-sm leading-normal font-light">
            {description}
          </p>
        </div>
        {bullet && bullet.length > 0 && (
          <ul className="list-disc list-inside mb-4 px-5">
            {bullet.map((point, index) => (
              <li key={index} className="text-gray-700">
                {point.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

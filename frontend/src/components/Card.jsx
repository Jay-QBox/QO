import React from "react";

export default function Card({
  title,
  description,
  imageUrl,
  bullet,
  onReadMore,
}) {
  return (
    <div
      onClick={onReadMore}
      className="cursor-pointer relative flex flex-col my-6 bg-white shadow-sm justify-between border border-slate-200 rounded-lg w-96 hover:shadow-lg bg-black-500"
    >
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
      </div>

      {/* <div className="px-4 pb-4 pt-0 mt-2">
        <button 
          className="rounded-md bg-base py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg  focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
          type="button"
        >
          Read more
        </button>
      </div> */}
    </div>
  );
}

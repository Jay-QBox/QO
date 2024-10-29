import React from "react";
import Card from "./Card";
import { useState } from "react";
import Modal from "./Modal";

export default function Gruha() {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-base text-white px-4 py-2 rounded-md"
      >
        ADD FEATURE
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      <Card />
    </div>
  );
}

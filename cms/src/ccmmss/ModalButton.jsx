import React, { useState } from "react";
import Modal from "./Modal";

const ModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Create New Post
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ModalButton;

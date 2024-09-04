import React from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

const Modal = ({ onClose, isOpen, children }) => {
  const handleClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      onClose();
    }
  };

  return createPortal(
    <>
      {isOpen && (
        <div
          onClick={handleClick}
          className="grid place-items-center backdrop-blur h-screen z-40 w-screen absolute top-0"
        >
          <div className="m-auto relative z-50 min-h-[200px] min-w-[80%] md:max-w-[25%] bg-white p-3">
            <div className="flex justify-end">
              <IoMdClose
                onClick={onClose}
                className="text-2xl cursor-pointer"
              />
            </div>
            {children}
          </div>
          <div className="backdrop-blur h-screen z-40 w-screen absolute top-0 backdrop" />
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
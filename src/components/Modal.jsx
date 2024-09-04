import React from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-lg p-5 max-w-[80%] md:max-w-[25%]">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <IoMdClose />
              </button>
              <div className="mt-4">{children}</div>
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;

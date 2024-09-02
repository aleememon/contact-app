import React from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="m-auto relative z-50 min-h-[200px] max-w-[80%] md:max-w-[25%] bg-white p-3">
            <div className="flex justify-end">
              <IoMdClose
                onClick={onClose}
                className="text-2xl cursor-pointer"
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="backdrop-blur h-screen z-40 w-screen absolute top-0"
          />
        </>
      )}
    </>
  ,document.getElementById("modal-root"));
};

export default Modal;

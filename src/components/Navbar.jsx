import React from "react";
import firebaseLogo from "../assets/logos_firebase.svg";
const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-2 h-[60px] m-2 mt-4 rounded-lg bg-white">
      <img src={firebaseLogo} className="size-10" alt="firebaselogo" />
      <h1 className="font-medium text-xl">Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;

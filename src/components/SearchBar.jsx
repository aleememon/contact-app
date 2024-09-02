import React from "react";

const SearchBar = ({onOpen , filterContacts}) => {
  return (
    <div className="flex gap-3 m-2 mt-4">
      <div className="w-full relative">
        <div className="text-white font-bold absolute top-2 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
        onChange={filterContacts}
          type="text"
          className="outline-none bg-transparent border rounded-md w-full h-10 text-lg text-white placeholder:text-white pb-0.5 pl-9"
          placeholder="Search Contact"
        />
      </div>
      <div onClick={onOpen} className="bg-white text-4xl font-semibold cursor-pointer rounded-full hover:bg-slate-300  duration-300  h-10 pb-2 flex justify-center w-[15%] items-center">
        +
      </div>
    </div>
  );
};

export default SearchBar;

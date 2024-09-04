import React from 'react'
import img from "../assets/Hands Contact.png";
const NoContactFound = () => {
  return (
    <div className='flex mx-auto h-[70vh] items-center mt-0 gap-2'>
      <img src={img} alt="No Contacts Found Image" />
      <h3 className='font-semibold text-xl text-white'>Contacts Not Found</h3>
    </div>
  )
}

export default NoContactFound

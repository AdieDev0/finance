import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'framer-motion';

const Navbars = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="font-bold text-3xl text-green-500 pl-4">Finance</h1>

      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">Resources</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Contact</li>
      </ul>

      {/* Hamburger Menu Icon */}
      <div onClick={handleNav} className="block md:hidden pr-4 cursor-pointer">
        <motion.div
          animate={{ rotate: nav ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {nav ? <IoIosClose size={45} /> : <CgMenuRight size={35} />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#161414] ease-in-out duration-500`}
        initial={{ x: '-100%' }}
        animate={{ x: nav ? '0%' : '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold text-3xl text-green-500 m-4">Finance</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer">Home</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">Company</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">Resources</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">About</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">Contact</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbars;

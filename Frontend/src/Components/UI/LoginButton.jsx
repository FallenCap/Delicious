import React from 'react';
import { AiOutlineLogin } from 'react-icons/ai';

const Button = () => {
  return (
    <React.Fragment>
      <a
        href="#_"
        className="relative inline-flex w-24 h-12 items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-whie transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
          <AiOutlineLogin className="text-3xl text-purple-600" />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
          login
        </span>
        <span className="relative invisible">Button Text</span>
      </a>
    </React.Fragment>
  );
};

export default Button;

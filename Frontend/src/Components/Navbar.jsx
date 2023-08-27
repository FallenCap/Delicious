import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';

const Navbar = () => {
  const [loggedIn, setIsloggedIn] = useState(true);
  return (
    <React.Fragment>
      <div className="w-full h-20 bg-gradient-to-t from-candy1 to-candy2 opacity-70 drop-shadow-xl">
        <div className="container flex justify-around">
          <div className="pl-2">
            <img src={logo} width={80} alt="logo.png" className="opacity-100" />
          </div>
          <div className="flex justify-center items-center">
            <div className="px-4">
              <Link to="/create-recipe">
                <AiOutlinePlusCircle className="text-white text-3xl" />
              </Link>
            </div>
            <div className="px-4">
              {loggedIn ? (
                <CgProfile className="text-white text-3xl" />
              ) : (
                <AiOutlineLogin className="text-white text-3xl" />
              )}
            </div>
            <div className="px-4">
              <AiOutlineLogout className="text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

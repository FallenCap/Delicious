import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import { useUser } from '../Context/userLoginContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClear, MdAccountCircle } from 'react-icons/md';
import { IoMdLogIn } from 'react-icons/io';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const toggled = `w-full h-full bg-gradient-to-t from-candy1 to-candy2 drop-shadow-xl flex justify-center`;
const notToggled = `w-full h-20 overflow-hidden bg-gradient-to-t from-candy1 to-candy2 drop-shadow-xl flex justify-center`;

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const user = useUser();

  const navClass = isToggle ? toggled : notToggled;

  return (
    <React.Fragment>
      <div className={navClass}>
        <div className="container flex flex-col sm:flex-row justify-between">
          <div className=" flex sm:justify-center items-center px-4 sm:px-2 2xl:px-20 justify-between">
            <img
              src={logo1}
              width={80}
              alt="logo.png"
              className="opacity-100"
            />
            <div className="pr-4">
              {isToggle ? (
                <MdClear
                  className="text-white text-3xl sm:hidden"
                  onClick={() => setIsToggle(false)}
                />
              ) : (
                <GiHamburgerMenu
                  className="text-white text-3xl sm:hidden"
                  onClick={() => setIsToggle(true)}
                />
              )}
            </div>
          </div>
          <div className="flex sm:justify-center flex-col sm:flex-row sm:items-center sm:px-2 2xl:px-20">
            <div className="px-8 sm:px-4 py-4">
              <Link to="/create-recipe">
                <AiOutlinePlusCircle className="text-white hover:text-violet-700 text-4xl hover:scale-125 transition-all ease-in-out delay-150" />
              </Link>
            </div>
            <div className="px-8 sm:px-4 py-4">
              {user ? (
                <Link to="/profile">
                  <MdAccountCircle className="text-white hover:text-violet-700 text-4xl hover:scale-125 transition-all ease-in-out delay-150" />
                </Link>
              ) : (
                <Link to="/login">
                  <IoMdLogIn className="text-white hover:text-violet-700 text-4xl hover:scale-125 transition-all ease-in-out delay-150" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

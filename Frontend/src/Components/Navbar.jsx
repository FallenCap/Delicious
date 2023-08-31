import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import LoginButton from './UI/LoginButton';
import AddButton from './UI/AddButton';
import ProfileButton from './UI/ProfileButton';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClear } from 'react-icons/md';

const toggled = `w-full h-full bg-gradient-to-t from-candy1 to-candy2 drop-shadow-xl flex justify-center`;
const notToggled = `w-full h-20 overflow-hidden bg-gradient-to-t from-candy1 to-candy2 drop-shadow-xl flex justify-center`;

const Navbar = () => {
  const [loggedIn, setIsloggedIn] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const navClass = isToggle ? toggled : notToggled;

  return (
    <React.Fragment>
      <div className={navClass}>
        <div className="container flex flex-col sm:flex-row justify-between">
          <div className=" flex sm:justify-center items-center pl-2 justify-between">
            <img
              src={logo1}
              width={80}
              alt="logo.png"
              className="opacity-100"
            />
            <div className="pr-2">
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
          <div className="flex sm:justify-center flex-col sm:flex-row sm:items-center">
            <div className="px-2 sm:px-4 py-4">
              <Link to="/create-recipe">
                <AddButton />
              </Link>
            </div>
            <div className="px-2 sm:px-4 py-4">
              {loggedIn ? (
                <Link to="/profile">
                  <ProfileButton />
                </Link>
              ) : (
                <Link to="/login">
                  <LoginButton />
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

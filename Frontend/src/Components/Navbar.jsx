import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import LoginButton from './UI/LoginButton';
import AddButton from './UI/AddButton';
import ProfileButton from './UI/ProfileButton';

const Navbar = () => {
  const [loggedIn, setIsloggedIn] = useState(false);
  return (
    <React.Fragment>
      <div className="w-full h-20 bg-gradient-to-t from-candy1 to-candy2 drop-shadow-xl flex justify-center">
        <div className="container flex justify-between">
          <div className=" flex justify-center items-center pl-2">
            <img
              src={logo1}
              width={80}
              alt="logo.png"
              className="opacity-100"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="px-4">
              <Link to="/create-recipe">
                <AddButton />
              </Link>
            </div>
            <div className="px-4">
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

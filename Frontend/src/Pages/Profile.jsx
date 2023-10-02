import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { AiFillProfile, AiFillSetting } from 'react-icons/ai';
import PersonalDetails from '../Components/PersonalDetails';
import Settings from '../Components/Settings';

const Profile = () => {
  const [page, setPage] = useState(true);

  return (
    <React.Fragment>
      <Navbar />

      <div className=" container mx-auto flex">
        <div className="flex flex-col">
          <div className="mt-32 ml-12 border-r-2 border-gray-500 w-72">
            <div className="p-4">
              <button
                type="button"
                className="flex justify-center items-center w-60 h-12 text-gray-500 focus:bg-slate-300 focus:rounded-full outline-none"
                autoFocus
                onClick={() => setPage(!page)}
              >
                <AiFillProfile className="text-2xl" />
                <p className="font-bold pl-2">Profile</p>
              </button>
            </div>
            <div className="p-4">
              <button
                type="button"
                className="flex justify-center items-center w-60 h-12 text-gray-500 focus:bg-slate-300 focus:rounded-full outline-none"
                onClick={() => setPage(!page)}
              >
                <AiFillSetting className="text-2xl" />
                <p className="font-bold pl-2">Settings</p>
              </button>
            </div>
          </div>
        </div>

        <div>{page ? <PersonalDetails /> : <Settings />}</div>
      </div>
    </React.Fragment>
  );
};

export default Profile;

import React from 'react';

const PersonalDetails = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center mb-24">
        {/* Profile pic */}
        <div className="mx-36 mt-20">
          <img
            src="https://api.dicebear.com/7.x/micah/svg/seed=subham"
            alt="profile"
            className="bg-violet-700 w-64 rounded-full border-solid border-4 border-red-600"
          />
        </div>

        {/* User Details */}
        <div className="w-96 mx-36">
          <h1 className="font-extrabold text-gray-500 text-4xl py-4">
            Subham Saha
          </h1>
          <p className="text-gray-500 py-4">
            <span className="font-bold">Email:</span> subham.saha.dev@gmail.com
          </p>
          <p className="text-gray-500 py-4">
            <span className="font-bold">Job:</span> Business Man
          </p>
          <p className="text-gray-500">
            <span className="font-bold">About me:</span> Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Id, doloremque consequuntur
            adipisci deleniti assumenda ducimus reprehenderit sequi dignissimos
            fuga aperiam natus iusto veritatis temporibus magnam, beatae eos
            quia nemo distinctio.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonalDetails;

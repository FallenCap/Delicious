import React, { useState } from 'react';

const SignupCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [consfirmPassword, setConfirmPassword] = useState('');
  return (
    <React.Fragment>
      <div className="h-[90vh] w-[90wh] bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold pb-8 text-slate-600">Signup</h1>
        <form className="flex flex-col">
          <div className="flex flex-col pb-8 px-24">
            <label className="font-semibold text-slate-600 pb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-96 px-4 py-2 outline-none bg-transparent border-2 border-slate-600 rounded-lg"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col pb-8 px-24">
            <label className="font-semibold text-slate-600 pb-2">Name</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-96 px-4 py-2 outline-none bg-transparent border-2 border-slate-600 rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col pb-8 px-24">
            <label className="font-semibold text-slate-600 pb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-96 px-4 py-2 outline-none bg-transparent border-2 border-slate-600 rounded-lg"
            />
          </div>
          <div className="flex flex-col pb-8 px-24">
            <label className="font-semibold text-slate-600 pb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter the same password"
              className="w-96 px-4 py-2 outline-none bg-transparent border-2 border-slate-600 rounded-lg"
            />
          </div>
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="transition-[bg-gradient] ease-in-out-out delay-300 bg-gradient-to-t from-candy1 to-candy2 hover:bg-gradient-to-b duration-500 w-1/2 px-4 py-3 text-white text-xl font-bold rounded-xl"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignupCard;

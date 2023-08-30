import React from 'react';

const LoginCard = () => {
  return (
    <React.Fragment>
      <div className="h-[90vh] w-[90wh] bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold pb-8 text-slate-600">Login</h1>
        <form className="flex flex-col">
          <div className="flex flex-col pb-8 px-24">
            <label className="font-semibold text-slate-600 pb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-96 px-4 py-2 outline-none bg-transparent border-2 border-slate-600 rounded-lg"
            />
          </div>
          <div className="flex flex-col pb-8 px-24">
            <label className="font-semibold text-slate-600 pb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your assword"
              className="w-96 px-4 py-2 outline-none bg-transparent border-2 border-slate-600 rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center pb-8">
            <a
              href="/signup"
              className="hover:underline decoration-1 hover:text-candy1"
            >
              Don't have account, Signup here.
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="transition-[bg-gradient] ease-in-out-out delay-300 bg-gradient-to-t from-candy1 to-candy2 hover:bg-gradient-to-b duration-500 w-1/2 px-4 py-3 text-white text-xl font-bold rounded-xl"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginCard;

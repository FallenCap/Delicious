import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetUser } from '../Context/userLoginContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1200,
  timerProgressBar: true,
});

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUser = useSetUser();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        'http://localhost:3001/api/v1/users/login',
        {
          email,
          password,
        }
      );
      console.log(user);
      setUser(user);
      Toast.fire({
        icon: 'success',
        title: 'Logged in successfully',
      });
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      if (error.response.status === 401) {
        Toast.fire({
          icon: 'warning',
          title: error.response.data.message,
        });
      } else if (error.response.status === 500) {
        Toast.fire({
          icon: 'error',
          title: error.response.data.message,
        });
      }
      // console.log();
    }
  };
  return (
    <React.Fragment>
      <div className="w-screen h-screen flex flex-col justify-center items-center z-10">
        <h1 className="text-6xl md:text-7xl font-bold pb-8 text-gray-500 shadow-sm">
          Login
        </h1>
        <form className="flex flex-col" onSubmit={loginHandler}>
          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-80 md:w-96 px-4 py-2 outline-none bg-white border-2 border-slate-600 rounded-lg"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 md:w-96 px-4 py-2 outline-none bg-white border-2 border-slate-600 rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
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
              className="transition-[bg-gradient] ease-in-out-out delay-300 bg-gradient-to-t from-candy1 to-candy2 hover:bg-gradient-to-b duration-500 md:w-1/2 px-4 py-3 text-white text-base md:text-xl font-bold rounded-xl"
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

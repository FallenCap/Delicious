import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1200,
  timerProgressBar: true,
});

const SignupCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');

  const navigate = useNavigate();

  const submitUserHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/v1/users/signup', {
        name,
        email,
        password,
        passwordConfirm,
      });
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully',
      });
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      if (
        error.response.data.error.errors.name &&
        error.response.data.error.errors.name.message ===
          'A user must have a name!'
      ) {
        Toast.fire({
          icon: 'warning',
          title: 'Please enter Username!',
        });
      } else if (
        error.response.data.error.errors.email &&
        error.response.data.error.errors.email.message ===
          'A user must have a email!'
      ) {
        Toast.fire({
          icon: 'warning',
          title: 'Please enter a email address!',
        });
      } else if (
        error.response.data.error.errors.email &&
        error.response.data.error.errors.email.message ===
          'Please enter a valid email!'
      ) {
        Toast.fire({
          icon: 'warning',
          title: 'Please enter a valid email address!',
        });
      } else if (
        error.response.data.error.errors.password &&
        error.response.data.error.errors.password.message ===
          'Password is required!'
      ) {
        Toast.fire({
          icon: 'warning',
          title: 'Please enter a password!',
        });
      } else if (
        error.response.data.error.errors.password &&
        error.response.data.error.errors.password.kind === 'minlength'
      ) {
        Toast.fire({
          icon: 'warning',
          title: 'Please enter a password with minimum 8 characters!',
        });
      } else if (
        error.response.data.error.errors.passwordConfirm &&
        error.response.data.error.errors.passwordConfirm.message ===
          'Please confirm your password!'
      ) {
        Toast.fire({
          icon: 'warning',
          title: error.response.data.error.errors.passwordConfirm.message,
        });
      }
      // console.log(error);
    }
  };
  return (
    <React.Fragment>
      <div className=" w-screen h-screen flex flex-col justify-center items-center z-10">
        <h1 className="text-6xl md:text-7xl font-bold pb-8 text-gray-500 shadow-sm">
          Sign in
        </h1>
        <form className="flex flex-col" onSubmit={submitUserHandler}>
          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-80 md:w-96 px-4 py-2 outline-none bg-white border-2 border-slate-600 rounded-lg"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">Email</label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-80 md:w-96 px-4 py-2 outline-none bg-white border-2 border-slate-600 rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter the same password again"
              className="w-80 md:w-96 px-4 py-2 outline-none bg-white border-2 border-slate-600 rounded-lg"
              onChange={(e) => setpasswordConfirm(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="transition-[bg-gradient] ease-in-out-out delay-300 bg-gradient-to-t from-candy1 to-candy2 hover:bg-gradient-to-b duration-500 w-1/3 md:w-1/2 px-4 py-3 text-white text-base md:text-xl font-bold rounded-xl"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignupCard;

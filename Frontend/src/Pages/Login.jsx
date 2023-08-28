import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animation_llufw913.json';
import LoginCard from '../Components/LoginCard';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const Login = () => {
  
  return (
    <React.Fragment>
      <div className="h-screen flex justify-between items-center w-screen">
        {/* LottiePlayer */}
        <div className="px-16 w-1/2">
          <Lottie options={defaultOptions} className="h-4/5 w-4/5" />
        </div>
        {/* LoginCard */}
        <div className="px-16 w-1/2 flex justify-center items-center">
          <LoginCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;

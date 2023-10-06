import React from 'react';
import animationData1 from '../assets/animation_llufw913.json';
import { Player } from '@lottiefiles/react-lottie-player';
import LoginCard from '../Components/LoginCard';

const Login = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        {/* lottie player */}
        <div className="blur-[3px] absolute inset-0 flex justify-center items-center">
          <Player autoplay loop src={animationData1} className="w-full" />
        </div>
        {/* Login Card */}
        <div className="flex justify-center items-center">
          <LoginCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;

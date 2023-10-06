import React from 'react';
import animationData2 from '../assets/animation_llv5eea5.json';
import { Player } from '@lottiefiles/react-lottie-player';
import SignupCard from '../Components/SignupCard';

const Signup = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        {/* lottie player */}
        <div className="blur-[3px] fixed inset-0 flex justify-center items-center">
          <Player autoplay loop src={animationData2} className="w-full" />
        </div>
        {/* Login Card */}
        <div className="flex justify-center items-center">
          <SignupCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;

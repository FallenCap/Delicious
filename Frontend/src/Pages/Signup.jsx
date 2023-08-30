import React from 'react';
import Lottie from 'react-lottie';
import animationData2 from '../assets/animation_llv5eea5.json';
import SignupCard from '../Components/SignupCard';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Signup = () => {
  return (
    <React.Fragment>
      <div className="h-screen flex justify-between items-center w-screen">
        {/* LottiePlayer */}
        <div className="px-16 w-1/2">
          <Lottie options={defaultOptions} className="h-4/5 w-4/5" />
        </div>
        {/* SignupCard */}
        <div className="px-16 w-1/2 flex justify-center items-center">
          <SignupCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;

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
      <div className="flex items-center justify-center">
        {/* lottie player */}
        <div className="absolute blur-[3px] top-0 bottom-0">
          <Lottie options={defaultOptions} />
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

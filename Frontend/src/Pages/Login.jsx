import React from 'react';
import Lottie from 'react-lottie';
import animationData1 from '../assets/animation_llufw913.json';
import LoginCard from '../Components/LoginCard';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData1,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const Login = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        {/* lottie player */}
        <div className="absolute blur-[3px] top-0 bottom-0">
          <Lottie options={defaultOptions} />
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

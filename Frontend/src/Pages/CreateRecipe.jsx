import React, { useState, uuseEffect } from 'react';
import Lottie from 'react-lottie';
import animationData3 from '../assets/animation_ln0b30ng.json';
import CreateReceipeCard from '../Components/CreateRecipeCard';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData3,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const CreateRecipe = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        {/* lottie player */}
        <div className="absolute blur-[3px] top-0 bottom-0">
          <Lottie options={defaultOptions} />
        </div>
        <div className="flex justify-center items center">
          <CreateReceipeCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateRecipe;

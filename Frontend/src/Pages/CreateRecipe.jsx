import React, { useState, uuseEffect } from 'react';
import animationData3 from '../assets/animation_ln0b30ng.json';
import { Player } from '@lottiefiles/react-lottie-player';
import CreateReceipeCard from '../Components/CreateRecipeCard';

const CreateRecipe = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        {/* lottie player */}
        <div className="blur-[3px] fixed inset-0 flex justify-center items-center">
          <Player autoplay loop src={animationData3} className="w-full" />
        </div>
        <div className="overflow-scroll">
          <div className="flex justify-center items center">
            <CreateReceipeCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateRecipe;

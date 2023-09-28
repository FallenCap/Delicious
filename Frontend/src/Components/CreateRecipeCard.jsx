import React, { useState, useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';

const CreateReceipeCard = () => {
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [process, setProcess] = useState('');

  const addIngredients = () => {
    if (ingredient.trim() !== '') {
      setIngredients([...ingredients, ingredient]);
      setIngredient('');
    }
  };

  const removeIngredient = (el) => {
    const updatedIngredients = ingredients.filter((item) => item !== el);

    setIngredients(updatedIngredients);
  };

  // console.log(ingredients);
  // console.log(arr);

  return (
    <React.Fragment>
      <div className="w-screen h-screen flex flex-col justify-center items-center z-10">
        <h1 className="text-4xl md:text-5xl text-center font-bold pb-8 text-gray-500 shadow-sm">
          Add your delicious receipe
        </h1>
        <form className="flex flex-col">
          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">
              Receipe Name
            </label>
            <input
              type="text"
              placeholder="Enter your receipe name"
              className="w-80 md:w-96 px-4 py-2 outline-none bg-white border-2 border-slate-600 rounded-lg"
              onChange={(e) => setFoodName(e.target.value)}
            />
          </div>
          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">
              Food Type
            </label>
            <div className="flex flex-row">
              <div className="flex-row">
                <input
                  type="radio"
                  name="foodType"
                  id="veg"
                  value="veg"
                  onChange={(e) => setFoodType(e.target.value)}
                />
                <label className="text-slate-600 pr-2">Veg</label>
              </div>
              <div className="flex-row">
                <input
                  type="radio"
                  name="foodType"
                  id="non-veg"
                  value="non-veg"
                  onChange={(e) => setFoodType(e.target.value)}
                />
                <label className="text-slate-600 pr-2">Non-Veg</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">
              Ingredients
            </label>
            <input
              type="text"
              value={ingredient}
              placeholder="Enter your ingredients"
              className="w-80 md:w-96 px-4 py-2 outline-none bg-white border-2 border-slate-600 rounded-lg"
              onChange={(e) => setIngredient(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addIngredients();
                }
              }}
            />
          </div>
          <div className="flex flex-row box-border flex-wrap w-80 md:w-96 pb-8">
            {ingredients.map((el) => {
              return (
                <div
                  key={Math.random()}
                  className="flex justify-center items-center bg-violet-700 w-fit py-0.25 px-3 rounded-full m-0.5"
                >
                  <p className="font-semibold text-white text-xs md:text-base">
                    {el}
                  </p>
                  <RiCloseLine
                    className="text-white l-0.5 text-xs md:text-base"
                    onClick={() => removeIngredient(el)}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">Process</label>
            <input
              type="text"
              placeholder="Enter the process"
              value={process}
              className="w-80 md:w-96 h-40 px-4 py-2 outline-none bg-white border-2 border-slate-600 rounded-lg"
              onChange={(e) => setProcess(e.target.value)}
            />
          </div>
          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">Process</label>
            <input type="image" placeholder="Enter the process" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateReceipeCard;

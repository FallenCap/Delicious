import React, { useState, useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { MdAddCircle } from 'react-icons/md';

const CreateReceipeCard = () => {
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [process, setProcess] = useState('');
  const [image, setImage] = useState(null);

  // TODO: function to add ingredient into ingredients array
  const addIngredients = () => {
    if (ingredient.trim() !== '') {
      setIngredients([...ingredients, ingredient]);
      setIngredient('');
    }
  };

  // TODO: function to remove ingredient from ingredients array
  const removeIngredient = (el) => {
    const updatedIngredients = ingredients.filter((item) => item !== el);

    setIngredients(updatedIngredients);
  };

  // console.log(ingredients);
  // console.log(arr);

  return (
    <React.Fragment>
      <div className="w-screen flex flex-col justify-center items-center z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl text-center font-bold pb-8 text-gray-500 shadow-sm mt-32">
          Add your delicious receipe
        </h1>

        {/* receipe adding form */}
        <form className="flex flex-col">
          {/* Receipe Name input */}
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

          {/* Food Type input */}
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
                <label className="text-slate-600 font-semibold pr-2">Veg</label>
              </div>
              <div className="flex-row">
                <input
                  type="radio"
                  name="foodType"
                  id="non-veg"
                  value="non-veg"
                  onChange={(e) => setFoodType(e.target.value)}
                />
                <label className="text-slate-600 font-semibold pr-2">
                  Non-Veg
                </label>
              </div>
            </div>
          </div>

          {/* Ingredients input */}
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

          {/* Ingredients list */}
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

          {/* Process input */}
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

          {/* Image input */}
          <div className="flex flex-col pb-8">
            <label className="font-semibold text-slate-600 pb-2">Image</label>
            <div className="w-full max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center w-full h-20 bg-white border-2 border-slate-600 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  <MdAddCircle className="text-violet-700 text-2xl" />
                  <span className="text-lg text-gray-500 ml-2">
                    {image ? image.name : 'No file selected'}
                  </span>
                  <input
                    type="file"
                    id="file-upload"
                    className="sr-only"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Submit button */}
          <div className="flex justify-center mb-24">
            <button
              type="submit"
              className="transition-[bg-gradient] ease-in-out-out delay-300 bg-gradient-to-t from-candy1 to-candy2 hover:bg-gradient-to-b duration-500 w-1/3 md:w-1/2 px-4 py-3 text-white text-base md:text-xl font-bold rounded-xl"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateReceipeCard;

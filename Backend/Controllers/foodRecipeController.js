import foodRecipe from '../Models/foodReceipe.js';
import catchAsync from '../Utils/catchAsync.js';
import AppErr from '../Utils/appErr.js';
import apiFeatures from '../Utils/apiFeatures.js';

// Todo: function to create new food receipe.
export const createRecipe = catchAsync(async (req, res, next) => {
  const newRecipe = await foodRecipe.create({
    name: req.body.name,
    type: req.body.type,
    ingredients: req.body.ingredients,
    process: req.body.process,
  });

  res.status(201).json({
    status: 'sucess',
    data: {
      foodRecipe: newRecipe,
    },
  });
});

// Todo: function to fetch all receipe.
export const getAllRecipe = catchAsync(async (req, res, next) => {
  // * Executing the query for API.
  const features = new apiFeatures(foodRecipe.find(), req.query)
    .filter()
    .sort()
    .limitfields();

  const recipes = await features.query;

  res.status(400).json({
    status: 'sucess',
    count: recipes.length,
    data: {
      recipes,
    },
  });
});

// TODO: function to fetch receipe using id.
export const getRecipeById = catchAsync(async (req, res, next) => {
  const recipe = await foodRecipe.findById(req.params.id);
  // console.log(receipe);

  if (!recipe) {
    next(new AppErr(`No receipe found with the _id: ${req.params.id}`, 404));
  }

  res.status(400).json({
    status: 'sucess',
    data: {
      recipe,
    },
  });
});

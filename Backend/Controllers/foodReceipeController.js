import foodReceipe from '../Models/foodReceipe.js';
import catchAsync from '../Utils/catchAsync.js';
import AppErr from '../Utils/appErr.js';
import apiFeatures from '../Utils/apiFeatures.js';

// Todo: function to create new food receipe.
export const createReceipe = catchAsync(async (req, res, next) => {
  const newReceipe = await foodReceipe.create({
    name: req.body.name,
    type: req.body.type,
    requiredItems: req.body.requiredItems,
    process: req.body.process,
  });

  res.status(201).json({
    status: 'sucess',
    data: {
      foodReceipe: newReceipe,
    },
  });
});

// Todo: function to fetch all receipe.
export const getAllReceipe = catchAsync(async (req, res, next) => {
  // * Executing the query for API.
  const features = new apiFeatures(foodReceipe.find(), req.query)
    .filter()
    .sort()
    .limitfields();

  const receipes = await features.query;

  res.status(400).json({
    status: 'sucess',
    count: receipes.length,
    data: {
      receipes,
    },
  });
});

// TODO: function to fetch receipe using id.
export const getReceipeById = catchAsync(async (req, res, next) => {
  const receipe = await foodReceipe.findById(req.params.id);
  // console.log(receipe);

  if (!receipe) {
    next(new AppErr(`No receipe found with the _id: ${req.params.id}`, 404));
  }

  res.status(400).json({
    status: 'sucess',
    data: {
      receipe,
    },
  });
});

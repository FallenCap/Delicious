import foodReceipe from '../Models/foodReceipe.js';
import catchAsync from '../Utils/catchAsync.js';
import AppErr from '../Utils/appErr.js';

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

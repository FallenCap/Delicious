import mongoose from 'mongoose';

const foodRecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A food must have name!'],
    unique: true,
    trim: true,
  },
  type: {
    type: String,
    requird: [true, 'food type is required!'],
    enum: {
      values: ['veg', 'non-veg'],
      message: 'Food should be veg or non-veg',
    },
  },
  ingredients: {
    type: [String],
    required: true,
  },
  process: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const foodRecipe = mongoose.model('foodRecipe', foodRecipeSchema);
export default foodRecipe;

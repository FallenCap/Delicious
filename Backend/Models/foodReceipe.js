import mongoose from 'mongoose';

const foodReceipeSchema = new mongoose.Schema({
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
  requiredItems: {
    type: [String],
    required: true,
  },
  process: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const foodReceipe = mongoose.model('foodReceipe', foodReceipeSchema);
export default foodReceipe;

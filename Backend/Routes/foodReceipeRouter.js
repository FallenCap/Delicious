import express from 'express';
import {
  createRecipe,
  getAllRecipe,
  getRecipeById,
} from '../Controllers/foodRecipeController.js';
import { protect } from '../Controllers/authController.js';

const router = express.Router();

router.route('/recipe').post(protect, createRecipe).get(getAllRecipe);
router.route('/recipe/:id').get(getRecipeById);

export { router as foodReceipeRouter };

import express from 'express';
import {
  createRecipe,
  getAllRecipe,
  getRecipeById,
} from '../Controllers/foodRecipeController.js';

const router = express.Router();

router.route('/recipe').post(createRecipe).get(getAllRecipe);
router.route('/recipe/:id').get(getRecipeById);

export { router as foodReceipeRouter };

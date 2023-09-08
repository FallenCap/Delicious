import express from 'express';
import {
  createReceipe,
  getAllReceipe,
  getReceipeById,
} from '../Controllers/foodReceipeController.js';

const router = express.Router();

router.route('/receipe').post(createReceipe).get(getAllReceipe);
router.route('/receipe/:id').get(getReceipeById);

export { router as foodReceipeRouter };

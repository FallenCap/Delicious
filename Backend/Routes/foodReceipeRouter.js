import express from 'express';
import { createReceipe } from '../Controllers/foodReceipeController.js';

const router = express.Router();

router.post('/createReceipe', createReceipe);

export { router as foodReceipeRouter };

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { userRouter } from './Routes/userRoutes.js';
import { globalErrorHandler } from './Controllers/errorController.js';
import AppErr from './Utils/appErr.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);

app.all('*', (req, res, next) => {
  const err = new AppErr(`Can't find ${req.originalUrl}`, 404);
  next(err);
});

app.use(globalErrorHandler);

export default app;

import User from '../Models/userModel.js';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import catchAsync from '../Utils/catchAsync.js';
import AppErr from '../Utils/appErr.js';

// TODO: function to generate new token for every new user,
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// TODO: Controller function for signup.
export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: req.body.passwordChangedAt,
  });
  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'sucess',
    token,
    data: {
      user: newUser,
    },
  });
});

// TODO: Controller function for login.
export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // *For empty fields
  if (!email || !password) {
    return next(new AppErr('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  const token = signToken(user._id);

  // * For wrong email adress and password
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppErr('Incorrect email or password', 401));
  }
  res.status(200).json({
    status: 'sucess',
    token,
    user,
  });
});

// TODO: Protecting routes

export const protect = catchAsync(async (req, res, next) => {
  // * Checking the JWT tokens existence
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppErr('You are not logged in! Please login to get acess.', 401)
    );
  }

  // * Verifying token
  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  console.log(decodedToken);

  // * Check if the user still exists
  const freshUser = await User.findById(decodedToken.id);

  if (!freshUser) {
    return next(new AppErr('The user does not exist.', 401));
  }

  //* Check if the user changes the password after the token was issued
  if (freshUser.changePasswordAfter(decodedToken.iat)) {
    return next(
      new AppErr('User recently changed password! Please login again.', 401)
    );
  }

  req.user = freshUser;
  next();
});

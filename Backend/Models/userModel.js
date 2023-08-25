import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A user must have a name!'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'A user must have a email!'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Please enter a valid email!'],
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please cconfirm your password!'],
    validate: {
      // * This will check the both password is same or not.
      validator: function (el) {
        return el === this.password; // * This only works on create and save!
      },
      message: 'Password are not the same',
    },
  },
  passwordChangedAt: Date,
});

userSchema.pre('save', async function (next) {
  // * Only run this function if password is actually modified.
  if (!this.isModified('password')) {
    return next();
  }

  // * Hash the password with cost of 12.
  this.password = await bcrypt.hash(this.password, 12);

  // * Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('Users', userSchema);

export default User;

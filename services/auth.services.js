import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../db/models/user.model.js';
import customError from '../middlewares/customError.middleware.js';

const generateToken = async (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  )
};

const signin = async (email, password) => {
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      throw customError(404, 'User not found');
    }
    if (!validUser.isActive) {
      throw customError(403, 'User account is not active');
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      throw customError(404, 'Wrong credentials!');
    }
    const token = await generateToken(validUser);
    const { password: pass, ...rest } = validUser._doc;
    return { user: rest, token };
  } catch (error) {
    throw error;
  }
};

const signup = async (user) => {
  try {
    const { username, email, password } = user;

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      if (existingUsername.isActive) {
        throw new Error(`The username ${username} is already in use`);
      } else {
        throw new Error(`The username ${username} is already in use but the account is inactive`);
      }
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      if (existingEmail.isActive) {
        throw new Error(`The email address ${email} is already in use`);
      } else {
        throw new Error(`The email address ${email} is already in use but the account is inactive`);
      }
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

const createAdminUser = async (user) => {
  try {
    const { username, email, password } = user;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, isAdmin: true });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const authService = {
  signin,
  signup,
  createAdminUser
};
import User from '../db/models/user.model.js';
import customError from '../middlewares/customError.middleware.js';

const getAll = async () => {
  try {
    const res = await User
      .find({
        isActive: true
      }, '-password')
      .populate('role');
    return res;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  try {
    const res = await User
      .findOne({
        _id: id,
        isActive: true
      }, '-password')
      .populate('role');
    return res;
  } catch (error) {
    throw error;
  }
};

const getByEmail = async (email) => {
  try {
    const res = await User
      .findOne({
        email: email,
        isActive: true
      });
    return res;
  } catch (error) {
    throw error;
  }
};

const getByUsername = async (username) => {
  try {
    const res = await User
      .findOne({
        username: username,
        isActive: true
      });
    return res;
  } catch (error) {
    throw error;
  }
};

const getAdminUser = async () => {
  try {
    const res = await User
      .findOne({
        isAdmin: true
      });
    return res;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await getById(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`)
    }
    await User.findByIdAndUpdate(
      id,
      { $set: { isActive: false } },
      { new: true }
    );
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, userData) => {
  try {
    const user = await getById(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`)
    }

    if ('username' in userData) {
      if (user.username === userData.username) {
        throw customError(400, "The new username is the same as the current username. No changes were made.");
      }
      const usernameInUsage = await getByUsername(userData.username);
      if (usernameInUsage) {
        throw customError(400, "Username already in usage");
      }
    }

    if ('email' in userData) {
      if (user.email === userData.email) {
        throw customError(400, "The new email is the same as the current email. No changes were made.");
      }
      const emailInUsage = await getByEmail(userData.email);
      if (emailInUsage) {
        throw customError(400, "Email already in usage");
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: userData },
      // Para devolver el documento actualizado y ejecutar las validaciones de mongoose:
      { new: true, runValidators: true }
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

export const userRepository = {
  getAll,
  getById,
  getByEmail,
  getByUsername,
  getAdminUser,
  deleteUser,
  updateUser,
};
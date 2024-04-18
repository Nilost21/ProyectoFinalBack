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

    let updatedUserData = { ...userData };

    if ('username' in userData && userData.username !== user.username) {
      const usernameInUsage = await getByUsername(userData.username);
      if (usernameInUsage) {
        throw customError(400, "Username already in usage");
      } else {
        // Si el email no está siendo modificado, asignar el email actual del usuario
        updatedUserData.email = user.email;
      }
    }

    if ('email' in userData && userData.email !== user.email) {
      const emailInUsage = await getByEmail(userData.email);
      if (emailInUsage) {
        throw new Error("Email already in use");
      }
    } else {
      // Si el email no está siendo modificado, asignar el email actual del usuario
      updatedUserData.email = user.email;
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updatedUserData },
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
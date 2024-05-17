import { userRepository } from '../repositories/user.repository.js';
import customError from '../middlewares/customError.middleware.js';

const getAll = async () => {
  const response = await userRepository.getAll();
  return response;
};

const getById = async (id) => {
  const user = await userRepository.getById(id);
  if (!user) {
    throw customError(404, `User doesn't exist with id ${id}`);
  }
  return user;
};

const getNameById = async (id) => {
  const user = await userRepository.getNameById(id);
  if (!user) {
    throw customError(404, `User doesn't exist with id ${id}`);
  }
  return user;
};

const getAdminUser = async () => {
  const adminUser = await userRepository.getAdminUser();
  return adminUser;
};

const deleteUser = async (id) => {
  try {
    await userRepository.deleteUser(id);
  } catch (error) {
    console.error(`Failed to delete user with id ${id}:`, error.message);
    throw error;
  }
};

const updateUser = async (id, userData) => {
  if ('isAdmin' in userData) {
    throw customError(400, "You are not allowed to update the isAdmin attribute.");
  }
  await userRepository.updateUser(id, userData);
};

export const userService = {
  getAll,
  getById,
  getNameById,
  getAdminUser,
  deleteUser,
  updateUser,
};
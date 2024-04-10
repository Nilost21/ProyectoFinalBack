import { userRepository } from '../repositories/user.repository.js';

const getAll = async () => {
  const response = await userRepository.getAll();
  return response;
};

const getById = async (id) => {
  const user = await userRepository.getById(id);
  if (!user) throw new Error(`User doesn't exist with id ${id}`);
  return user;
};

const getAdminUser = async () => {
  const adminUser = await userRepository.getAdminUser();
  return adminUser;
}

const deleteUser = async (id) => {
  try {
    await userRepository.deleteUser(id);
  } catch (error) {
    console.error(`Failed to delete user with id ${id}:`, error.message);
    throw error;
  }
};

const updateUser = async (id, userData) => {
  try {
    await userRepository.updateUser(id, userData);
  } catch (error) {
    console.error(`Failed to update user with id ${id}:`, error.message);
    throw error;
  }
};

export const userService = {
  getAll,
  getById,
  getAdminUser,
  deleteUser,
  updateUser,
};
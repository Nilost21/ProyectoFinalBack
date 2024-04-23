import { classRepository } from '../repositories/class.repository.js';

const getAllClasses = async () => {
  try {
    return await classRepository.getAllClasses();
  } catch (error) {
    throw new Error(`Error getting all classes: ${error.message}`);
  }
};

const getById = async (id) => {
  const res = await classRepository.getById(id);
  if (!res) {
    throw customError(404, `Class doesn't exist with id ${id}`);
  }
  return res;
};

const createClass = async (classData) => {
  try {
    return await classRepository.createClass(classData);
  } catch (error) {
    throw new Error(`Error creating class: ${error.message}`);
  }
};

const updateClass = async (id, updatedClassData) => {
  try {
    return await classRepository.updateClass(id, updatedClassData);
  } catch (error) {
    throw new Error(`Error updating class: ${error.message}`);
  }
};

const deleteClass = async (id) => {
  try {
    return await classRepository.deleteClass(id);
  } catch (error) {
    throw new Error(`Error deleting class: ${error.message}`);
  }
};

export const classServices = {
  getAllClasses,
  getById,
  createClass,
  updateClass,
  deleteClass
};

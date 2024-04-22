import { classRepository } from '../repositories/class.repository.js';

const getAllClasses = async () => {
  try {
    return await classRepository.getAllClasses();
  } catch (error) {
    throw new Error(`Error getting all classes: ${error.message}`);
  }
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
  createClass,
  updateClass,
  deleteClass
};

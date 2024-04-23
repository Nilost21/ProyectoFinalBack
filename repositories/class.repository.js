import Class from '../db/models/class.model.js';

const getAllClasses = async () => {
  try {
    const classes = await Class.find();
    return classes;
  } catch (error) {
    throw new Error(`Error getting all classes: ${error.message}`);
  }
};

const getById = async (id) => {
  try {
    const res = await Class
      .findOne({ _id: id, })
    return res;
  } catch (error) {
    throw error;
  }
};

const createClass = async (classData) => {
  try {
    const newClass = new Class(classData);
    const savedClass = await newClass.save();
    return savedClass;
  } catch (error) {
    throw new Error(`Error creating class: ${error.message}`);
  }
};

const updateClass = async (id, updatedClassData) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(id, updatedClassData, {
      new: true,
    });
    return updatedClass;
  } catch (error) {
    throw new Error(`Error updating class: ${error.message}`);
  }
};

const deleteClass = async (id) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(id);
    return deletedClass;
  } catch (error) {
    throw new Error(`Error deleting class: ${error.message}`);
  }
};

export const classRepository = {
  getAllClasses,
  getById,
  createClass,
  updateClass,
  deleteClass
};

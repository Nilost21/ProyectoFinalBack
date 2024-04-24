import GymClass from '../db/models/class.model.js';

const getAllClasses = async () => {
  try {
    const classes = await GymClass.find();
    return classes;
  } catch (error) {
    throw new Error(`Error getting all classes: ${error.message}`);
  }
};

const getById = async (id) => {
  try {
    const res = await GymClass
      .findOne({ _id: id, })
    return res;
  } catch (error) {
    throw error;
  }
};

const getClassNameById = async (classId) => {
  try {
    const classObject = await GymClass.findById(classId);
    if (!classObject) {
      return 'Unknown';
    }
    return classObject.name;
  } catch (error) {
    throw error;
  }
};

const getClassTeacherById = async (classId) => {
  try {
    const classObject = await GymClass.findById(classId);
    if (!classObject) {
      return 'Unknown';
    }
    return classObject.teacher;
  } catch (error) {
    throw error;
  }
};

const getClassesForToday = async () => {
  try {
    const currentDate = new Date().toISOString().split('T')[0];
    const classesForToday = await GymClass.find({
      dateAndTime: {
        $gte: new Date(`${currentDate}T00:00:00.000Z`),
        $lt: new Date(`${currentDate}T23:59:59.999Z`)
      }
    });
    console.log("ClassesForToday", classesForToday)
    return classesForToday;

  } catch (error) {
    throw new Error('Error al obtener las clases para el día actual: ' + error.message);
  }
};

const createClass = async (classData) => {
  try {
    const newClass = new GymClass(classData);
    const savedClass = await newClass.save();
    return savedClass;
  } catch (error) {
    throw new Error(`Error creating class: ${error.message}`);
  }
};

const updateClass = async (id, updatedClassData) => {
  try {
    const updatedClass = await GymClass.findByIdAndUpdate(id, updatedClassData, {
      new: true,
    });
    return updatedClass;
  } catch (error) {
    throw new Error(`Error updating class: ${error.message}`);
  }
};

const deleteClass = async (id) => {
  try {
    const deletedClass = await GymClass.findByIdAndDelete(id);
    return deletedClass;
  } catch (error) {
    throw new Error(`Error deleting class: ${error.message}`);
  }
};

export const classRepository = {
  getAllClasses,
  getById,
  getClassNameById,
  getClassTeacherById,
  getClassesForToday,
  createClass,
  updateClass,
  deleteClass
};

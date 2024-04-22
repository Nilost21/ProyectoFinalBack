import { classServices } from '../services/class.services.js';

const getAllClasses = async (req, res) => {
  try {
    const classes = await classServices.getAllClasses();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createClass = async (req, res) => {
  try {
    const newClass = await classServices.createClass(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateClass = async (req, res) => {
  try {
    const updatedClass = await classServices.updateClass(req.params.id, req.body);
    res.status(200).json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteClass = async (req, res) => {
  try {
    const deletedClass = await classServices.deleteClass(req.params.id);
    res.status(200).json(deletedClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getAllClasses,
  createClass,
  updateClass,
  deleteClass
};

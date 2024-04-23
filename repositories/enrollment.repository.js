import Enrollment from '../db/models/enrollment.model.js';

const getAll = async () => {
  try {
    const res = await Enrollment.find();
    return res;
  } catch (error) {
    throw error;
  }
};

const newEnrollment = async (enrollmentData) => {
  try {
    const res = new Enrollment(enrollmentData);
    await res.save();
    return res;
  } catch (error) {
    throw error;
  }
};

const deleteEnrollment = async (id) => {
  try {
    const res = await Enrollment.findByIdAndDelete(id);
    return res;
  } catch (error) {
    throw error;
  }
};

export const enrollmentRepository = {
  getAll,
  newEnrollment,
  deleteEnrollment
};

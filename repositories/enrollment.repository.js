import Enrollment from '../db/models/enrollment.model.js';
import Class from '../db/models/class.model.js';
import User from '../db/models/user.model.js';

const getAll = async () => {
  try {
    const res = await Enrollment.find();
    console.log("REPOSITORY ENROLLMENT", res);
    return res;
  } catch (error) {
    throw error;
  }
};

const newEnrollment = async (enrollmentData) => {
  console.log("Informacion que llega al repositorio de newEnrollment", enrollmentData);
  try {
    const res = new Enrollment(enrollmentData);
    console.log("Llego hasta el repository de enrollment", res);
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

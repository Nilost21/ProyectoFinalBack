import { enrollmentRepository } from '../repositories/enrollment.repository.js';

const getAll = async () => {
  return await enrollmentRepository.getAllEnrollments();
};

const newEnrollment = async (userId, classId) => {
  const enrollmentData = { user: userId, gymClass: classId };
  return await enrollmentRepository.newEnrollment(enrollmentData);
};

const deleteEnrollment = async (enrollmentId) => {
  return await enrollmentRepository.deleteEnrollment(enrollmentId);
};

export const enrollmentService = {
  getAll,
  newEnrollment,
  deleteEnrollment
};
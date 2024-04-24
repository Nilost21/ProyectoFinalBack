import { enrollmentRepository } from '../repositories/enrollment.repository.js';

const getAll = async () => {
  return await enrollmentRepository.getAll();
};

const newEnrollment = async (userId, classId) => {
  const enrollmentData = { user: userId, gymClass: classId };
  return await enrollmentRepository.newEnrollment(enrollmentData);
};

const getEnrollmentsForToday = async () => {
  return await enrollmentRepository.getEnrollmentsForToday();
};

const getUserEnrollments = async (userId) => {
  return await enrollmentRepository.getUserEnrollments(userId);
};

const deleteEnrollment = async (enrollmentId) => {
  return await enrollmentRepository.deleteEnrollment(enrollmentId);
};

export const enrollmentService = {
  getAll,
  newEnrollment,
  getEnrollmentsForToday,
  getUserEnrollments,
  deleteEnrollment
};
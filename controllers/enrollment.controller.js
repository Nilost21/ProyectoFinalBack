import { enrollmentService } from '../services/enrollment.services.js';

const getAll = async (req, res, next) => {
  try {
    const enrollments = await enrollmentService.getAll();
    res.json(enrollments);
  } catch (error) {
    console.log("Error en el controlador")
    next(error);
  }
};

const newEnrollment = async (req, res, next) => {
  const { user, gymClass } = req.body;
  try {
    const enrollment = await enrollmentService.newEnrollment(user, gymClass);
    res.status(201).json(enrollment);
  } catch (error) {
    console.log("Error en el controlador")
    next(error);
  }
};

const getEnrollmentsForToday = async (req, res) => {
  try {
    const enrollmentsForToday = await enrollmentService.getEnrollmentsForToday();
    res.status(200).json(enrollmentsForToday);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEnrollment = async (req, res, next) => {
  const enrollmentId = req.params.id;
  try {
    await enrollmentService.deleteEnrollment(enrollmentId);
    res.json({ message: 'Enrollment deleted' });
  } catch (error) {
    console.log("Error en el controlador")
    next(error);
  }
};

export {
  newEnrollment,
  getAll,
  getEnrollmentsForToday,
  deleteEnrollment
};
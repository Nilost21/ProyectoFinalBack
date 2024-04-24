import { Router } from 'express';
import { getAll, newEnrollment, getEnrollmentsForToday, getUserEnrollments, deleteEnrollment } from '../controllers/enrollment.controller.js';
import { AdminPermission, isAccountOwner } from '../middlewares/index.js';

const router = Router();

router.get('', getAll);
router.post('', newEnrollment);
router.get('/enrollments/today', getEnrollmentsForToday);
router.get('/enrollments/:id', getUserEnrollments);
router.delete('/:id', deleteEnrollment);

export default router;
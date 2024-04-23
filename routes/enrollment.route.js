import { Router } from 'express';
import { getAll, newEnrollment, deleteEnrollment } from '../controllers/enrollment.controller.js';
import { AdminPermission, isAccountOwner } from '../middlewares/index.js';

const router = Router();

// Obtener todas las inscripciones
router.get('', getAll);
router.post('', newEnrollment);


// Estas van en sus rutas
//router.get('/user/:userId', getEnrollments);
//router.get('/class/:classId', getEnrollments);

export default router;
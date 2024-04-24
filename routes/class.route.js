import { Router } from 'express';
import {
  getAllClasses,
  getById,
  getClassNameById,
  getClassTeacherById,
  getClassesForToday,
  createClass,
  updateClass,
  deleteClass
} from '../controllers/class.controller.js';
import { AdminPermission } from '../middlewares/index.js';

const router = Router();

router.get('/', getAllClasses);
router.get('/:id', getById);
router.get('/name/:id', getClassNameById);
router.get('/teacher/:id', getClassTeacherById);
router.get('/classes/today', getClassesForToday);
router.post('/create', createClass);
router.put('/:id', updateClass);
router.delete('/:id', deleteClass);

export default router;

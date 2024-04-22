import { Router } from 'express';
import { getAllClasses, createClass, updateClass, deleteClass } from '../controllers/class.controller.js';
import { AdminPermission } from '../middlewares/index.js';

const router = Router();

router.get('/', getAllClasses);
router.post('/create', createClass);
router.put('/:id', updateClass);
router.delete('/:id', deleteClass);

export default router;

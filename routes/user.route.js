import { Router } from 'express';
import { getAll, getById, deleteUser, updateUser } from '../controllers/user.controller.js';
import { AdminPermission, isAccountOwner } from '../middlewares/index.js'

const router = Router();

router.get('', AdminPermission, getAll);
router.get('/:id', AdminPermission, getById);
router.delete('/:id', AdminPermission, deleteUser);
router.put('/:id', AdminPermission, updateUser);

router.get('/profile/:id', isAccountOwner, getById);
router.delete('/profile/:id', isAccountOwner, deleteUser);

export default router;
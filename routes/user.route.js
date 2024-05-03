import { Router } from 'express';
import { getAll, getById, getNameById, deleteUser, updateUser } from '../controllers/user.controller.js';
import { AdminPermission, isAccountOwner } from '../middlewares/index.js';

const router = Router();

router.get('', AdminPermission, getAll);
router.get('/:id', AdminPermission, getById);
router.get('/name/:id', AdminPermission, getNameById);
router.delete('/:id', AdminPermission, deleteUser);

router.get('/profile/:id', isAccountOwner, getById);
router.put('/profile/:id', isAccountOwner, updateUser);
router.delete('/profile/:id', isAccountOwner, deleteUser);

export default router;
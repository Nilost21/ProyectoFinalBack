import { Router } from 'express';
import { getAll, getById, deleteUser, updateUser } from '../controllers/user.controller.js';
import { hasAnyRole, isAccountOwner } from '../middlewares/index.js'

const router = Router();

router.get('', hasAnyRole(["ADMIN"]), getAll);
router.get('/:id', hasAnyRole(["ADMIN"]), getById);
router.get('/profile/:id', isAccountOwner, getById);
router.put('/:id', isAccountOwner, updateUser);
router.delete('/:id', isAccountOwner, deleteUser);

export default router;
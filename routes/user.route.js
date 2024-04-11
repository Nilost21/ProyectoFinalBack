import { Router } from 'express';
import { getAll, getById, deleteUser, updateUser } from '../controllers/user.controller.js';
import { isAdmin, isAccountOwner } from '../middlewares/index.js'

const router = Router();

router.get('', isAdmin, getAll);
router.get('/:id', isAdmin, getById);
router.delete('/:id', isAdmin, deleteUser);

router.put('/:id', isAccountOwner, updateUser);
router.get('/profile/:id', isAccountOwner, getById);
router.delete('/profile/:id', isAccountOwner, deleteUser);

export default router;
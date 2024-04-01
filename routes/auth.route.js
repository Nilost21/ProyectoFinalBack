import { Router } from 'express';
import { signin, signout, signup } from '../controllers/auth.controller.js';

const router = Router();

router.post('/signin', signin);
router.post('/signout', signout);
router.post('/signup', signup);

export default router;
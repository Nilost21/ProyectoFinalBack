import { Router } from 'express';

import authRouter from './auth.route.js';
import userRouter from './user.route.js';
import productsRouter from './products.route.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/products', productsRouter);

export default router;
import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  deleteProductById,
} from '../controllers/product.controller.js';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/create', addNewProduct);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

export default router;

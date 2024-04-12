import { Router } from 'express';

const router = Router();

// getProducts
router.get('', (req, res) => {
  // Lógica para obtener productos
});
// addProduct
router.post('/create', (req, res) => {
  // Lógica para obtener productos
})
// updateProduct
router.put('/:id', (req, res) => {
  // Lógica para obtener productos
})
// deleteProducts
router.delete('/:id', (req, res) => {
  // Lógica para obtener productos
})

export default router;
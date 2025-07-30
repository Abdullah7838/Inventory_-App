import express from 'express';
import {
  createProduct, getProducts, getProduct,
  updateProduct, deleteProduct
} from '../controllers/productController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

export default router;

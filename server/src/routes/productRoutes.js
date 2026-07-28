import express from 'express';
import { createProduct } from '../controllers/productController.js';
import { authorize } from '../middleware/rbac.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router =express.Router()

router.post(
    "/",
    authenticateToken,
    authorize("seller"),
    createProduct
);

export default router;
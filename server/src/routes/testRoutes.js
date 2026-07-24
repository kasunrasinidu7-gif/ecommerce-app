import express from 'express';
import{authenticateToken } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/rbac.js';

const router = express.Router();

router.get("/protected", authenticateToken,authorize('buyer'), (req, res) => {
    res.json({
        success: true,
        message: "You accessed a protected route! Your role is: " + req.user.role
    });
});

export default router;
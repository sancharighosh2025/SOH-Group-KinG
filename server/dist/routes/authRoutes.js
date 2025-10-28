import express from 'express';
import { signup, login, logout, getProfile, updateProfile } from '../controllers/authController.js';
import { authenticateToken } from '../middlewares/auth.js';
const router = express.Router();
// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
// Protected routes
router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateProfile);
export default router;

import express from 'express';
import { authenticateToken } from '../middlewares/auth.middleware.js';
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  updateCart,
} from '../controllers/cart.controller.js';

const cartRouter = express.Router();

// All cart routes require authentication
cartRouter.use(authenticateToken);

// Get user's cart
cartRouter.get('/', getCart);

// Add item to cart
cartRouter.post('/', addToCart);

// Update entire cart (sync from frontend)
cartRouter.post('/update', updateCart);

// Update item quantity
cartRouter.put('/:itemId', updateCartItem);

// Remove item from cart
cartRouter.delete('/:itemId', removeFromCart);

// Clear entire cart
cartRouter.delete('/', clearCart);

export default cartRouter;

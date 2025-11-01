import { Request, Response } from 'express';
import prisma from '../config/prisma.js';

interface AuthRequest extends Request {
  userId?: string;
}

// Get user's cart: GET /api/cart
export const getCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized: Missing user ID',
      });
      return;
    }

    const cartItems = await prisma.cartItem.findMany({
      where: { userId },
      orderBy: { created_at: 'asc' },
    });

    console.log(`[Cart] Loading cart for user ${userId}, found ${cartItems.length} items`);

    const totalItems = cartItems.reduce((sum: number, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum: number, item) => sum + item.price * item.quantity, 0);

    // Return cart even if empty
    res.status(200).json({
      success: true,
      cart: {
        items: cartItems || [],
        totalItems: totalItems || 0,
        totalPrice: totalPrice || 0,
      },
    });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Add item to cart: POST /api/cart
export const addToCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId;
    const { itemId, name, price, quantity = 1, category, about, img } = req.body;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized: Missing user ID',
      });
      return;
    }

    // Validation
    if (!itemId || !name || price === undefined || !category) {
      res.status(400).json({
        success: false,
        message: 'Missing required fields: itemId, name, price, and category are required',
      });
      return;
    }

    if (quantity <= 0 || !Number.isInteger(quantity)) {
      res.status(400).json({
        success: false,
        message: 'Quantity must be a positive integer',
      });
      return;
    }

    // Check if item already exists in cart
    const existingItem = await prisma.cartItem.findUnique({
      where: {
        userId_itemId: {
          userId,
          itemId,
        },
      },
    });

    let cartItem;

    if (existingItem) {
      // Update quantity if item already exists
      cartItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: existingItem.quantity + quantity,
          updated_at: new Date(),
        },
      });
    } else {
      // Create new cart item
      cartItem = await prisma.cartItem.create({
        data: {
          userId,
          itemId,
          name,
          price: parseFloat(price),
          quantity,
          category,
          about: about || null,
          img: img || null,
        },
      });
      console.log(`[Cart] Created new cart item for user ${userId}, itemId: ${itemId}`);
    }

    console.log(`[Cart] Cart item ${existingItem ? 'updated' : 'created'} for user ${userId}`);
    res.status(200).json({
      success: true,
      message: existingItem ? 'Cart item quantity updated' : 'Item added to cart',
      cartItem,
    });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Update item quantity: PUT /api/cart/:itemId
export const updateCartItem = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId;
    const { itemId } = req.params;
    const { quantity } = req.body;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized: Missing user ID',
      });
      return;
    }

    if (quantity === undefined || quantity < 0 || !Number.isInteger(quantity)) {
      res.status(400).json({
        success: false,
        message: 'Quantity must be a non-negative integer',
      });
      return;
    }

    // If quantity is 0, remove the item
    if (quantity === 0) {
      await prisma.cartItem.deleteMany({
        where: {
          userId,
          itemId,
        },
      });

      res.status(200).json({
        success: true,
        message: 'Item removed from cart',
      });
      return;
    }

    // Update quantity
    const cartItem = await prisma.cartItem.update({
      where: {
        userId_itemId: {
          userId,
          itemId,
        },
      },
      data: {
        quantity,
        updated_at: new Date(),
      },
    });

    res.status(200).json({
      success: true,
      message: 'Cart item updated',
      cartItem,
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes('Record to update not found')) {
      res.status(404).json({
        success: false,
        message: 'Cart item not found',
      });
      return;
    }

    console.error('Update cart item error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Remove item from cart: DELETE /api/cart/:itemId
export const removeFromCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId;
    const { itemId } = req.params;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized: Missing user ID',
      });
      return;
    }

    const result = await prisma.cartItem.deleteMany({
      where: {
        userId,
        itemId,
      },
    });

    if (result.count === 0) {
      res.status(404).json({
        success: false,
        message: 'Cart item not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Item removed from cart',
    });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Clear cart: DELETE /api/cart
export const clearCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized: Missing user ID',
      });
      return;
    }

    await prisma.cartItem.deleteMany({
      where: { userId },
    });

    res.status(200).json({
      success: true,
      message: 'Cart cleared successfully',
    });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Update entire cart (sync from frontend): POST /api/cart/update
export const updateCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId;
    const { cartItems } = req.body;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized: Missing user ID',
      });
      return;
    }

    if (!Array.isArray(cartItems)) {
      res.status(400).json({
        success: false,
        message: 'cartItems must be an array',
      });
      return;
    }

    // Clear existing cart
    await prisma.cartItem.deleteMany({
      where: { userId },
    });

    // Add new items if provided
    if (cartItems.length > 0) {
      const itemsToCreate = cartItems.map((item: any) => ({
        userId,
        itemId: item.id || item.itemId,
        name: item.name,
        price: parseFloat(item.price),
        quantity: item.quantity || 1,
        category: item.category,
        about: item.about || null,
        img: item.img || null,
      }));

      await prisma.cartItem.createMany({
        data: itemsToCreate,
        skipDuplicates: true,
      });
    }

    // Return updated cart
    const updatedCartItems = await prisma.cartItem.findMany({
      where: { userId },
      orderBy: { created_at: 'asc' },
    });

    const totalItems = updatedCartItems.reduce((sum: number, item) => sum + item.quantity, 0);
    const totalPrice = updatedCartItems.reduce((sum: number, item) => sum + item.price * item.quantity, 0);

    res.status(200).json({
      success: true,
      message: 'Cart updated successfully',
      cart: {
        items: updatedCartItems,
        totalItems,
        totalPrice,
      },
    });
  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import type { CartItem } from '../types/cart';

export const useCartActions = () => {
  const navigate = useNavigate();
  const { state: authState } = useAuth();
  const { state, addItem, removeItem, updateQuantity, clearCart } = useCart();
  const { addToast } = useToast();

  const addItemWithToast = (item: Omit<CartItem, 'quantity'>) => {
    // Check if user is authenticated
    if (!authState.isAuthenticated || authState.isLoading) {
      addToast({
        type: 'warning',
        title: 'Login Required',
        message: 'Please login to add items to cart',
        duration: 3000,
      });
      navigate('/login', { state: { from: window.location.pathname, message: 'Please login to add items to cart' } });
      return;
    }

    const existingItem = state.items.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      addItem(item);
      addToast({
        type: 'success',
        title: 'Quantity Updated',
        message: `${item.name} quantity increased`,
        duration: 2000,
      });
    } else {
      addItem(item);
      addToast({
        type: 'success',
        title: 'Added to Cart',
        message: `${item.name} has been added to your cart`,
        duration: 2000,
      });
    }
  };

  const removeItemWithToast = (id: string, itemName: string) => {
    removeItem(id);
    addToast({
      type: 'info',
      title: 'Removed from Cart',
      message: `${itemName} has been removed from your cart`,
      duration: 2000,
    });
  };

  const updateQuantityWithToast = (id: string, quantity: number, itemName: string) => {
    // Check if user is authenticated
    if (!authState.isAuthenticated || authState.isLoading) {
      addToast({
        type: 'warning',
        title: 'Login Required',
        message: 'Please login to update cart',
        duration: 3000,
      });
      navigate('/login', { state: { from: window.location.pathname } });
      return;
    }

    if (quantity <= 0) {
      removeItemWithToast(id, itemName);
    } else {
      updateQuantity(id, quantity);
      addToast({
        type: 'success',
        title: 'Quantity Updated',
        message: `${itemName} quantity updated to ${quantity}`,
        duration: 2000,
      });
    }
  };

  const clearCartWithToast = () => {
    clearCart();
    addToast({
      type: 'info',
      title: 'Cart Cleared',
      message: 'All items have been removed from your cart',
      duration: 2000,
    });
  };

  const getItemQuantity = (id: string) => {
    const item = state.items.find(item => item.id === id);
    return item ? item.quantity : 0;
  };

  const isItemInCart = (id: string) => {
    return state.items.some(item => item.id === id);
  };

  return {
    state,
    addItemWithToast,
    removeItemWithToast,
    updateQuantityWithToast,
    clearCartWithToast,
    getItemQuantity,
    isItemInCart,
  };
};

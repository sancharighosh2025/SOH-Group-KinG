import React, { createContext, useContext, useReducer, useEffect, useCallback, useRef } from 'react';
import type { ReactNode } from 'react';
import type { CartItem } from '../types/cart';

const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
const CART_CACHE_KEY = 'cart_cache';

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isLoading: boolean;
  isSyncing: boolean;
}

type CartAction =
  | { type: 'SET_CART'; payload: { items: CartItem[]; totalItems: number; totalPrice: number } }
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_SYNCING'; payload: boolean };

const CartContext = createContext<{
  state: CartState;
  addItem: (item: Omit<CartItem, 'quantity'>) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  loadCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'SET_CART': {
      return {
        ...state,
        items: action.payload.items,
        totalItems: action.payload.totalItems,
        totalPrice: action.payload.totalPrice,
        isLoading: false,
      };
    }
    
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        const newState = {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
        // Cache the state
        saveCartToCache(newState);
        return newState;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        const newState = {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
        // Cache the state
        saveCartToCache(newState);
        return newState;
      }
    }
    
    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (!itemToRemove) return state;
      
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const newState = {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
      };
      // Cache the state
      saveCartToCache(newState);
      return newState;
    }
    
    case 'UPDATE_QUANTITY': {
      const item = state.items.find(item => item.id === action.payload.id);
      if (!item) return state;
      
      const quantityDiff = action.payload.quantity - item.quantity;
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      
      const newState = {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDiff,
        totalPrice: state.totalPrice + (quantityDiff * item.price),
      };
      // Cache the state
      saveCartToCache(newState);
      return newState;
    }
    
    case 'CLEAR_CART': {
      const newState = {
        ...state,
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };
      // Clear cache
      localStorage.removeItem(CART_CACHE_KEY);
      return newState;
    }
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    
    case 'SET_SYNCING':
      return {
        ...state,
        isSyncing: action.payload,
      };
    
    default:
      return state;
  }
};

// Helper functions for cache
const saveCartToCache = (state: CartState) => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.setItem(CART_CACHE_KEY, JSON.stringify({
        items: state.items,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
        timestamp: Date.now(),
      }));
    }
  } catch (error) {
    console.error('[Cart] Failed to save cart to cache:', error);
  }
};

const loadCartFromCache = (): { items: CartItem[]; totalItems: number; totalPrice: number } | null => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const cached = localStorage.getItem(CART_CACHE_KEY);
    if (!cached) return null;

    const data = JSON.parse(cached);
    // Cache is valid for 1 hour
    if (Date.now() - data.timestamp > 3600000) {
      localStorage.removeItem(CART_CACHE_KEY);
      return null;
    }

    return {
      items: data.items || [],
      totalItems: data.totalItems || 0,
      totalPrice: data.totalPrice || 0,
    };
  } catch (error) {
    console.error('[Cart] Failed to load cart from cache:', error);
    return null;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    isLoading: true,
    isSyncing: false,
  });

  // Track if cart has been loaded initially and if we should prevent clearing
  const hasLoadedRef = useRef(false);
  const isInitialMountRef = useRef(true);

  // Load cart from backend - memoized to avoid recreating on every render
  const loadCart = useCallback(async () => {
    const token = localStorage.getItem('token');
    
    // If no token, try to load from cache first, then clear
    if (!token) {
      const cached = loadCartFromCache();
      if (cached) {
        console.log('[Cart] No token but found cache, loading from cache');
        dispatch({
          type: 'SET_CART',
          payload: cached,
        });
        hasLoadedRef.current = true;
        dispatch({ type: 'SET_LOADING', payload: false });
        return;
      }
      
      // Only clear if we've already loaded (to prevent clearing before initial load)
      if (hasLoadedRef.current && !isInitialMountRef.current) {
        dispatch({ type: 'CLEAR_CART' });
      }
      dispatch({ type: 'SET_LOADING', payload: false });
      hasLoadedRef.current = true;
      isInitialMountRef.current = false;
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      console.log('[Cart] Loading cart from backend...');
      const response = await fetch(`${baseURL}/api/cart`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('[Cart] Cart data received:', data);
        
        if (data.success && data.cart) {
          // Map backend cart items to frontend format
          const cartItems: CartItem[] = (data.cart.items || []).map((item: any) => ({
            id: item.itemId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            category: item.category,
            about: item.about || '',
            img: item.img || '',
          }));

          console.log('[Cart] Mapped cart items:', cartItems.length, 'items');

          const cartPayload = {
            items: cartItems,
            totalItems: data.cart.totalItems || cartItems.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: data.cart.totalPrice || cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          };

          dispatch({
            type: 'SET_CART',
            payload: cartPayload,
          });

          // Cache the loaded cart
          const cacheState: CartState = {
            items: cartPayload.items,
            totalItems: cartPayload.totalItems,
            totalPrice: cartPayload.totalPrice,
            isLoading: false,
            isSyncing: false,
          };
          saveCartToCache(cacheState);

          hasLoadedRef.current = true;
        } else {
          // If no cart data, try cache first
          const cached = loadCartFromCache();
          if (cached) {
            console.log('[Cart] No backend data, loading from cache');
            dispatch({
              type: 'SET_CART',
              payload: cached,
            });
          } else {
            console.log('[Cart] No cart data, initializing empty cart');
            dispatch({
              type: 'SET_CART',
              payload: {
                items: [],
                totalItems: 0,
                totalPrice: 0,
              },
            });
          }
          hasLoadedRef.current = true;
        }
      } else if (response.status === 401) {
        // User not authenticated, try cache first
        console.log('[Cart] 401 Unauthorized - trying cache');
        const cached = loadCartFromCache();
        if (cached) {
          dispatch({
            type: 'SET_CART',
            payload: cached,
          });
        } else {
          localStorage.removeItem('token');
          if (hasLoadedRef.current && !isInitialMountRef.current) {
            dispatch({ type: 'CLEAR_CART' });
          }
        }
        dispatch({ type: 'SET_LOADING', payload: false });
        hasLoadedRef.current = true;
      } else {
        // On error, try cache
        console.error('[Cart] Failed to load cart:', response.status, response.statusText);
        const cached = loadCartFromCache();
        if (cached) {
          console.log('[Cart] Loading from cache due to error');
          dispatch({
            type: 'SET_CART',
            payload: cached,
          });
        }
        dispatch({ type: 'SET_LOADING', payload: false });
        hasLoadedRef.current = true;
      }
    } catch (error) {
      console.error('[Cart] Failed to load cart:', error);
      // On error, try cache
      const cached = loadCartFromCache();
      if (cached) {
        console.log('[Cart] Loading from cache due to network error');
        dispatch({
          type: 'SET_CART',
          payload: cached,
        });
      }
      dispatch({ type: 'SET_LOADING', payload: false });
      hasLoadedRef.current = true;
    } finally {
      isInitialMountRef.current = false;
    }
  }, []);

  // Refresh cart from backend
  const refreshCart = useCallback(async () => {
    await loadCart();
  }, [loadCart]);

  // Load cart immediately on mount if token exists (don't wait for auth)
  useEffect(() => {
    console.log('[Cart] Component mounted, checking for token...');
    const token = localStorage.getItem('token');
    
    // Try cache first for instant loading
    const cached = loadCartFromCache();
    if (cached && token) {
      console.log('[Cart] Loading from cache immediately');
      dispatch({
        type: 'SET_CART',
        payload: cached,
      });
      dispatch({ type: 'SET_LOADING', payload: false });
      hasLoadedRef.current = true;
    }
    
    if (token) {
      console.log('[Cart] Token found, loading cart from backend');
      loadCart();
    } else {
      console.log('[Cart] No token found, setting loading to false');
      dispatch({ type: 'SET_LOADING', payload: false });
      hasLoadedRef.current = true;
    }
  }, [loadCart]);

  // NEVER clear cart based on auth state changes - only on explicit logout
  // This prevents the cart from being cleared during refresh/auth checks

  const addItem = async (item: Omit<CartItem, 'quantity'>) => {
    const token = localStorage.getItem('token');
    
    // Update local state immediately for better UX
    dispatch({ type: 'ADD_ITEM', payload: item });

    // If no token, just keep local state (guest mode)
    if (!token) {
      console.log('[Cart] No token, keeping local state only');
      return;
    }

    // Sync to backend
    try {
      console.log('[Cart] Adding item to backend:', item.id);
      const response = await fetch(`${baseURL}/api/cart`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          category: item.category,
          about: item.about,
          img: item.img,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('[Cart] Item added to cart in database:', data);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('[Cart] Failed to add item to cart on backend:', response.status, errorData);
        // Don't reload - keep optimistic update
      }
    } catch (error) {
      console.error('[Cart] Error adding item to cart:', error);
      // Don't reload - keep optimistic update
    }
  };

  const removeItem = async (id: string) => {
    const token = localStorage.getItem('token');
    
    // Update local state immediately
    dispatch({ type: 'REMOVE_ITEM', payload: id });

    // If no token, just keep local state (guest mode)
    if (!token) {
      return;
    }

    // Sync to backend
    try {
      const response = await fetch(`${baseURL}/api/cart/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('[Cart] Item removed from cart in database:', data);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('[Cart] Failed to remove item from cart on backend:', response.status, errorData);
      }
    } catch (error) {
      console.error('[Cart] Error removing item from cart:', error);
    }
  };

  const updateQuantity = async (id: string, quantity: number) => {
    if (quantity <= 0) {
      await removeItem(id);
      return;
    }

    const token = localStorage.getItem('token');
    
    // Update local state immediately
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });

    // If no token, just keep local state (guest mode)
    if (!token) {
      return;
    }

    // Sync to backend
    try {
      const response = await fetch(`${baseURL}/api/cart/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('[Cart] Cart item updated in database:', data);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('[Cart] Failed to update cart item on backend:', response.status, errorData);
      }
    } catch (error) {
      console.error('[Cart] Error updating cart item:', error);
    }
  };

  const clearCart = async () => {
    const token = localStorage.getItem('token');
    
    // Update local state immediately
    dispatch({ type: 'CLEAR_CART' });

    // If no token, just keep local state (guest mode)
    if (!token) {
      return;
    }

    // Sync to backend
    try {
      const response = await fetch(`${baseURL}/api/cart`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('[Cart] Cart cleared in database:', data);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('[Cart] Failed to clear cart on backend:', response.status, errorData);
      }
    } catch (error) {
      console.error('[Cart] Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ 
      state, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart,
      loadCart,
      refreshCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

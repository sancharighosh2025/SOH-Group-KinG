import React from 'react';
import { Button } from "./ui/button";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useCartActions } from '../hooks/useCartActions';
import type { CartItem } from '../types/cart';

interface SmartCartButtonProps {
  item: Omit<CartItem, 'quantity'>;
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export const SmartCartButton: React.FC<SmartCartButtonProps> = ({ 
  item, 
  size = 'default', 
  className = '' 
}) => {
  const { 
    addItemWithToast, 
    removeItemWithToast, 
    updateQuantityWithToast, 
    getItemQuantity, 
    isItemInCart 
  } = useCartActions();

  const quantity = getItemQuantity(item.id);
  const inCart = isItemInCart(item.id);

  const handleAddToCart = () => {
    addItemWithToast(item);
  };

  const handleIncrease = () => {
    updateQuantityWithToast(item.id, quantity + 1, item.name);
  };

  const handleDecrease = () => {
    updateQuantityWithToast(item.id, quantity - 1, item.name);
  };

  const handleRemove = () => {
    removeItemWithToast(item.id, item.name);
  };

  if (!inCart) {
    return (
      <Button 
        onClick={handleAddToCart}
        size={size}
        className={`w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all duration-300 ${className}`}
      >
        <ShoppingCart className="mr-2 w-4 h-4" />
        Add to Cart
      </Button>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Quantity Controls */}
      <div className="flex items-center justify-between bg-slate-100 rounded-lg p-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrease}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 flex items-center justify-center transition-colors duration-300 shadow-sm"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center font-semibold text-slate-900">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 flex items-center justify-center transition-colors duration-300 shadow-sm"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={handleRemove}
          className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors duration-300 text-red-600"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      
    </div>
  );
};
